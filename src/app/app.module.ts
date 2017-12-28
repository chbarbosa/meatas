import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ROUTES } from './app.routes';
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
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
