import { Component, OnInit } from '@angular/core';

import { AlertController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HomePage } from './home/home.page';
import { ProfilePage } from './profile/profile.page';
import { DashboardPage } from './dashboard/dashboard.page';
import { Router } from '@angular/router';
import { ViewAppointmentPage } from './view-appointment/view-appointment.page';
import { LessonViewPage } from './lesson-view/lesson-view.page';

import { CourseViewPage } from './course-view/course-view.page';
import { MyCoursesPage } from './my-courses/my-courses.page';
import { SavedCoursesPage } from './saved-courses/saved-courses.page';
// import { firebaseConfig } from './firebase.config';
// import firebase from 'firebase/app';
import { AuthService } from './services/auth.service';



// import { ChangePasswordPage } from './pages/jobseeker/change-password/change-password.page';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  public selectedIndex = 0;
  displayJobseekerData: any;
  public appPages = [
    { title: 'Home', component: HomePage, icon: 'home', url: 'home' },
    { title: 'Dashboard', component: DashboardPage, icon: 'apps', url: 'dashboard' },
    { title: 'My Profile', component: ProfilePage, icon: 'person', url: 'profile' },
    { title: 'Subscribed Courses', component: MyCoursesPage, icon: 'bookmark', url: 'my-courses' },

    { title: 'View Appointment', component: ViewAppointmentPage, icon: 'briefcase', url: 'view-appointment' },
   { title: 'Course View', component: CourseViewPage, icon: 'book', url: 'course-view' },
    { title: 'Lesson View', component: LessonViewPage, icon: 'book', url: 'lesson-view' },
   { title: 'Saved Courses', component:SavedCoursesPage, icon: 'bookmark', url: 'saved-courses' },
    //{ title: 'Change Password', component: ChangePasswordPage, icon: 'key', url: '/home/jobseeker-changepassword' }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
  }

  ngOnInit() {
    const path = window.location.pathname.split('home/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    this.authService.jobseekerData$.subscribe((res: any) => {
      this.displayJobseekerData = res;
      console.log(res);
    });

  }
  logout_now() {
    console.log('test');
    this.authService.logout_now();
   }
}
