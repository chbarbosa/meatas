import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { InputComponent } from './input/input.component';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';

import { NotificationService } from './messages/notification.service';
import { OrderService } from './../order/order.service';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { ShoppingCartService } from './../detalhe-restaurant/shopping-cart/shopping-cart.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';


@NgModule({
    declarations : [
        InputComponent,
        RadioComponent,
        RatingComponent,
        SnackbarComponent
    ],
    imports: [      
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        InputComponent,
        RadioComponent,
        RatingComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SnackbarComponent
    ]
})
export class SharedModule{
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers: [[ShoppingCartService, RestaurantsService, NotificationService, OrderService]]
        }
    }
}