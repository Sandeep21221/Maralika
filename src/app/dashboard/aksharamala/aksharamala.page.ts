import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { WordpressService } from 'src/app/services/wordpress.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-aksharamala',
  templateUrl: './aksharamala.page.html',
  styleUrls: ['./aksharamala.page.scss'],
})
export class AksharamalaPage implements OnInit {
  
  lesson:ILesson={
    co_id:185,
    ls_id:185
  }
  course: any = [];
  displayJobseekerData: any;
  lessondata: any;
 
  constructor(private httpClient:HttpClient, private authService: AuthService, private menu: MenuController, private router: Router,
    private statusBar: StatusBar, private wp: WordpressService, private loadingCtrl: LoadingController,
    private toastService: ToastService, public navCtrl: NavController,private route: ActivatedRoute) {
      
      this.lessonDetails();

    }
    
    ngOnInit() {
      this.authService.jobseekerData$.subscribe((res: any) => {
        this.displayJobseekerData = res;
      });
      
     }    
    async lessonDetails() {
    this.authService.lessonDetails(this.lesson)
        .subscribe((res: any) => {
          this.course = res;

        });
    }
    lessons_course(ls_id:number){
      this.lesson.co_id=ls_id;
      this.authService.lesson_cou(this.lesson)
        .subscribe((res: any) => {
        this.lessondata = res;

      });
    }

}
interface ILesson{
  co_id:number
  ls_id:number
}
