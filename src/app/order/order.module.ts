import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalheRestaurantComponent } from './../detalhe-restaurant/detalhe-restaurant.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { OrderComponent } from './order.component';
import { SharedModule } from './../shared/shared.module';


const ROUTES: Routes = [
    {path: '', component: OrderComponent}
]

@NgModule({
    declarations: [OrderComponent, OrderItemsComponent, DetalheRestaurantComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class OrderModule{

}