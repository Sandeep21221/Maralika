import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.page.html',
  styleUrls: ['./course-view.page.scss'],
})
export class CourseViewPage implements OnInit {
  courses = {};
  // tslint:disable-next-line: variable-name
  course_content: any = [];
  jbtest: any;
  courseData = {
    id: '185'
  };
  displayJobseekerData: any;
  url: any;
  public about: string;
  public learn: string;

  constructor(private route: ActivatedRoute, private authService: AuthService, private loadingCtrl: LoadingController) {
    
  }
  ngOnInit() {
  }

}
