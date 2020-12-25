import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-employerhome',
  templateUrl: './employerhome.page.html',
  styleUrls: ['./employerhome.page.scss'],
})
export class EmployerhomePage implements OnInit {
  displayEmployerData: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.employerData$.subscribe((res: any) => {
      this.displayEmployerData = res;
    });
  }
  logoutAction() {
    this.authService.emp_logout();
  }

}
