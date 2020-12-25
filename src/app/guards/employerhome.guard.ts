import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthConstants } from '../config/auth-constants';
import { StorageService } from '../services/storage.service';

@Injectable({
    providedIn: 'root'
    })
export class EmployerhomeGuard implements CanActivate {
constructor(public storageService: StorageService, public router: Router) {}
canActivate(): Promise<boolean> {
return new Promise(resolve => {
this.storageService.get(AuthConstants.EMPLOYER_AUTH).then(res => {
if (res) {
resolve(true);
} else {
this.router.navigate(['jobseeker-login']);
resolve(false);
}
})
.catch(err => {
resolve(false);
});
});
}
}
