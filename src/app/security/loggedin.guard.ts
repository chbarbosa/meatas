import { LoginService } from './login/login.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route } from "@angular/router";

@Injectable()
export class LoggedInGuard implements CanLoad {
    constructor(private logginService: LoginService){}
    canLoad(route: Route): boolean {
        const loggedIn = this.logginService.isLoggedIn()
        if (!loggedIn) {
            this.logginService.handleLogin(`/${route.path}`)
        } 
        return loggedIn
    }
}