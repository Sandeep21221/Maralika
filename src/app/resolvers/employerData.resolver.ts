import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
providedIn: 'root'
})
export class EmployerDataResolver {
constructor(private authService: AuthService) {}

resolve() {
// console.log('Hello');
return this.authService.getEmployerData();
}
}
