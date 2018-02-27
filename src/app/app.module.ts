import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler } from '@angular/core';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";


import { ROUTES } from './app.routes';
import { AplicationErrorHandler } from './app.error-handler';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DetalheRestaurantComponent } from './detalhe-restaurant/detalhe-restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { MenuComponent } from './detalhe-restaurant/menu/menu.component';
import { MenuItemComponent } from './detalhe-restaurant/menu-item/menu-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ReviewsComponent } from './detalhe-restaurant/reviews/reviews.component';
import { ShoppingCartComponent } from './detalhe-restaurant/shopping-cart/shopping-cart.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetalheRestaurantComponent,
    RestaurantsComponent,
    RestaurantComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide:ErrorHandler, useClass: AplicationErrorHandler}  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
