import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { WordpressService } from '../services/wordpress.service';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';




interface ILesson{
  std_id:number,
  co_id:number,
  is_id:string
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  
  course: any = [];
  displayJobseekerData: any;
 
  
  lesson:ILesson={
    std_id:6,
    co_id:185,
    is_id:""
  }
  lessondata: any;
  

  constructor( private httpClient:HttpClient, private authService: AuthService, private menu: MenuController, private router: Router,
    private statusBar: StatusBar, private wp: WordpressService, private loadingCtrl: LoadingController,
    private toastService: ToastService, public navCtrl: NavController) {
      // this.lesson.co_id=185;
      this.mycourse();
      // this.lessonDetails();

    }
   
    ngOnInit() {
      this.authService.jobseekerData$.subscribe((res: any) => {
        this.displayJobseekerData = res;
      });
      
     }    
    async mycourse() {
    this.authService.mycourse(this.lesson)
        .subscribe((res: any) => {  
        this.course = res;

      });
    }
    // async lessonDetails() {
    // this.authService.lessonDetails(this.lesson)
    //     .subscribe((res: any) => {
    //     this.course = res;

    //   });
    // }
    lessons(co_id:number){
      this.lesson.co_id=co_id;
      this.authService.lessonDetails(this.lesson)
        .subscribe((res: any) => {
        this.lessondata = res;

      });

      
      
    }

    

}



