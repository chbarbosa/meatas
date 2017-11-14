import { ShoppingCartService } from './detalhe-restaurant/shopping-cart/shopping-cart.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsService } from './restaurants/restaurants.service';
import { DetalheRestaurantComponent } from './detalhe-restaurant/detalhe-restaurant.component';
import { MenuComponent } from './detalhe-restaurant/menu/menu.component';
import { ShoppingCartComponent } from './detalhe-restaurant/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './detalhe-restaurant/menu-item/menu-item.component';
import { ReviewsComponent } from './detalhe-restaurant/reviews/reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    DetalheRestaurantComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
