import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  course: any = [];
  displayJobseekerData: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.getCourse();
    this.authService.jobseekerData$.subscribe((res: any) => {
      this.displayJobseekerData = res;
    });
   }
   

  async getCourse() {
    await this.authService.getCourse()
      .subscribe((res: any) => {
        this.course = res.data;
      });
  }

}
