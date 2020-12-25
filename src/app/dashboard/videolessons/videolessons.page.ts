import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-videolessons',
  templateUrl: './videolessons.page.html',
  styleUrls: ['./videolessons.page.scss'],
})
export class VideolessonsPage implements OnInit {
  lesson:ILesson={
    co_id:190,
    ls_id:190
  }
  course: any = [];
  displayJobseekerData: any;

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
  

}
interface ILesson{
ls_id:number
co_id:number

}
