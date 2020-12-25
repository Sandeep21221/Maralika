import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  url = `https://indiatraveljobs.com/blog/wp-json/wp/v2/`;
  totalPosts = null;
  pages: any;
  header: any[];
  body: any[];

  constructor(private http: HttpClient) { }

  getPosts(page = 1) {
    const options = {
      observe: 'response' as 'body',
      params: {
        per_page: '3',
        page: '' + page
      }
    };
    return this.http.get<any[]>(`${this.url}posts?_embed`, options).pipe(
      map((resp: any) => {
        this.pages = resp.headers.get('x-wp-totalpages');
        this.totalPosts = resp.headers.get('x-wp-total');

        const data = resp.body;
        // console.log(data);
        // console.log(this.totalPosts);

        for (const post of data) {
          if (post.featured_media > 0) {
            post.media_url = post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
          } else {
            post.media_url = '/assets/images/dummy_post_img.jpg';
          }
          // post.media_url = post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
        }
        return data;
      })
    );
  }

  getPostContent(id) {
    return this.http.get(`${this.url}posts/${id}?_embed`).pipe(
      map((post: any) => {

        if (post.featured_media > 0) {
          post.media_url = post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
        } else {
          post.media_url = '/assets/images/dummy_post_img.jpg';
        }
        // post.media_url = post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
        return post;
      })
    );
  }
}
