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
    co_id:null,
    ls_id:null
  };
  xyz=0;
  course: any = [];
  displayJobseekerData: any;
 
  constructor(private httpClient:HttpClient, private authService: AuthService, private menu: MenuController, private router: Router,
    private statusBar: StatusBar, private wp: WordpressService, private loadingCtrl: LoadingController,
    private toastService: ToastService, public navCtrl: NavController,private route: ActivatedRoute) {
      
      this.route.paramMap.subscribe( params => {
        this.xyz = parseInt(params.get('id'));
        
    
      });
      this.lessonDetails();
    }
    
    ngOnInit() {
      this.authService.jobseekerData$.subscribe((res: any) => {
        this.displayJobseekerData = res;
      });
      
     }    
    async lessonDetails() {
     var lesson1={
        co_id:this.xyz,
        ls_id:this.xyz
  
    } as ILesson;
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
