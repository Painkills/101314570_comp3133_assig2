import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';


@Injectable({
   providedIn: 'any'
})
export class AuthService {
    private _isUserLoggedIn = new BehaviorSubject<boolean>(false);

   canActivate: CanActivateFn = () => {
    if (localStorage.getItem('isUserLoggedIn') == "true") return true
    return false
   }

   public getUserStatus() {
    return this._isUserLoggedIn.asObservable();
   }

   public login(username: string) {
        localStorage.setItem('isUserLoggedIn', 'true');
        localStorage.setItem('username', username);
        this._isUserLoggedIn.next(true);
   }

   public logout() {
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('username')
    this._isUserLoggedIn.next(false);
}

   constructor() { }
}

