import { CanLoad } from '@angular/router';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { DetalheRestaurantComponent } from './detalhe-restaurant/detalhe-restaurant.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './security/login/login.component';
import { LoggedInGuard } from './security/loggedin.guard';
import { MenuComponent } from './detalhe-restaurant/menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ReviewsComponent } from './detalhe-restaurant/reviews/reviews.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login/:to', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: 'restaurants/:id', component: DetalheRestaurantComponent,
    children: [
        {path: '', redirectTo: 'menu', pathMatch: 'full'},
        {path: 'menu', component: MenuComponent},
        {path: 'reviews', component: ReviewsComponent}
    ]
    },
    {path: 'restaurants', component: RestaurantsComponent},
    {
        path: 'order',
        loadChildren: './order/order.module#OrderModule',
        canLoad: [LoggedInGuard],
        canActivate: [LoggedInGuard]
    },
    {path: 'order-summary', component: OrderSummaryComponent},
    {path: '**', component: NotFoundComponent}
]