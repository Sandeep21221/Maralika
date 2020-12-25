import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthConstants } from 'src/app/config/auth-constants';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  yudsegment: string;
  jobseeker = {
    username: '',
    password: ''
    };

  employer = {
    emp_username: '',
    emp_password: ''
    };

    constructor(
      private router: Router,
      private authService: AuthService,
      private storageService: StorageService,
      private toastService: ToastService
      ) {}

      // ionViewWillEnter(){
      //   this.yudsegment = 'jobseeker';
      // }

  ngOnInit() {
    this.yudsegment = 'jobseeker';
  }

  // navigateToHome(){
  //   this.router.navigate(['/home/job-seeker-home']);
  // }
  validateInputs() {
    let username = this.jobseeker.username.trim();
    let password = this.jobseeker.password.trim();
    return (
    this.jobseeker.username &&
    this.jobseeker.password &&
    username.length > 0 &&
    password.length > 0
    );
    }

    empvalidateInputs() {
      let emp_username = this.employer.emp_username.trim();
      let emp_password = this.employer.emp_password.trim();
      return (
      this.employer.emp_username &&
      this.employer.emp_password &&
      emp_username.length > 0 &&
      emp_password.length > 0
      );
      }

    login() {
      if (this.validateInputs()) {
      this.authService.login(this.jobseeker).subscribe(
      (res: any) => {
      if (res.jobseeker) {
      console.log(res);
      this.storageService.store(AuthConstants.JOBSEEKER_AUTH, res.jobseeker);
      this.router.navigate(['/home']);
      
      } else {
        this.toastService.presentToast(res.error);
      }
      },
      (error: any) => {
      console.log('Network Issue.');
      }
      );
      } else {
        this.toastService.presentToast('Please enter username or password.');
      }
    }

    instructor() {
      if (this.empvalidateInputs()) {
        this.authService.instructor(this.employer).subscribe(
        (res: any) => {
        if (res.employer) {
        // Storing the User data.
        this.storageService.store(AuthConstants.EMPLOYER_AUTH, res.employer);
        this.router.navigate(['/home']);
        } else {
          this.toastService.presentToast(res.error);
        }
        },
        (error: any) => {
        console.log('Network Issue.');
        }
        );
        } else {
          this.toastService.presentToast('Please enter username or password.');
        }
    }
}

