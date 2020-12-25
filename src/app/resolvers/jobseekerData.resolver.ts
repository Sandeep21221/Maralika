import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
providedIn: 'root'
})
export class JobseekerDataResolver {
constructor(private authService: AuthService) {}

resolve() {
// console.log('Hello');
return this.authService.getJobseekerData();
}
}
