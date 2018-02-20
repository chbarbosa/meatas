import { LoginService } from './login/login.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {
    constructor(private logginService: LoginService){}

    check(path: string): boolean {
        const loggedIn = this.logginService.isLoggedIn()
        if (!loggedIn) {
            this.logginService.handleLogin(`/${path}`)
        } 
        return loggedIn
        
    }
    canLoad(route: Route): boolean {
        return this.check(route.path)
    }

    canActivate(
        activateRoute: ActivatedRouteSnapshot,
        routerState: RouterStateSnapshot): boolean {
            return this.check(activateRoute.routeConfig.path)
    }
}