import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'saved-courses',
    loadChildren: () => import('./saved-courses/saved-courses.module').then( m => m.SavedCoursesPageModule)
  },
  {
    path: 'my-courses',
    loadChildren: () => import('./my-courses/my-courses.module').then( m => m.MyCoursesPageModule)
  },
  {
    path: 'course-view',
    loadChildren: () => import('./course-view/course-view.module').then( m => m.CourseViewPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'lesson-view',
    loadChildren: () => import('./lesson-view/lesson-view.module').then( m => m.LessonViewPageModule)
  },
  {
    path: 'exam-view',
    loadChildren: () => import('./exam-view/exam-view.module').then( m => m.ExamViewPageModule)
  },
  {
    path: 'view-appointment',
    loadChildren: () => import('./view-appointment/view-appointment.module').then( m => m.ViewAppointmentPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'employerhome',
    loadChildren: () => import('./employerhome/employerhome.module').then( m => m.EmployerhomePageModule)
  },
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
