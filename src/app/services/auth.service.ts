import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { AuthConstants } from '../config/auth-constants';


@Injectable({
providedIn: 'root'
})
export class AuthService {
  getCourseData(courseData: { id: string; }) {
    throw new Error('Method not implemented.');
  }
    jobseekerData$ = new BehaviorSubject<any>([]);
    employerData$ = new BehaviorSubject<any>([]);
    featuredemployerData$ = new BehaviorSubject<any>([]);

    constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
    ) {}

getCourse() {
    return this.httpService.get('course');
}

getJobseekerData() {
    this.storageService.get(AuthConstants.JOBSEEKER_AUTH).then(res => {
    this.jobseekerData$.next(res);
    });
}

getEmployerData() {
    this.storageService.get(AuthConstants.EMPLOYER_AUTH).then(res => {
    this.employerData$.next(res);
    });
}

login(postData: any): Observable<any> {
    return this.httpService.post('jobseeker_login', postData);
}

lessonDetails(postData: any): Observable<any> {
    return this.httpService.post('lessonDetails', postData);
}
mycourse(postData: any): Observable<any> {
    return this.httpService.post('mycourse', postData);
}
lesson(postData: any): Observable<any> {
    return this.httpService.post('lesson', postData);
}
// #ls_id
lesson_cou(postData: any): Observable<any> {
    return this.httpService.post('lesson_cou', postData);
}
instructor(postData: any): Observable<any> {
    return this.httpService.post('employer_login', postData);
}

signup(postData: any): Observable<any> {
    return this.httpService.post('jobseeker_signup', postData);
}

empsignup(postData: any): Observable<any> {
    return this.httpService.post('employer_signup', postData);
}

logout_now() {
    this.storageService.removeItem(AuthConstants.JOBSEEKER_AUTH).then(res => {
    this.jobseekerData$.next('');
    this.router.navigate(['/login']);
    });
}

emp_logout() {
// this.storageService.removeItem(AuthConstants.EMPLOYER_AUTH).then(res => {
// this.employerData$.next('');
// this.router.navigate(['/login']);
// });
  }
}
