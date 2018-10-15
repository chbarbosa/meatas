import { User } from './../../../backend/users';
import { LoginService } from './../security/login/login.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ShoppingCartService } from './../detalhe-restaurant/shopping-cart/shopping-cart.service';
import { Order } from "app/order/order.model";
import { CartItem } from './../detalhe-restaurant/shopping-cart/cart-item.model';

import { map } from 'rxjs/operators';

import { MEAT_API } from './../app.api';

@Injectable()
export class OrderService{

    constructor(private cartService: ShoppingCartService, 
                private http: HttpClient) {

    }
    
    itemsValue(): number {
      return this.cartService.total();
    }

    cartItems(): CartItem[]{
        return this.cartService.items;
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item);
    }
    
    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item);
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item);
    }
    checkOrder(order: Order): Observable<String>{

        return this.http.post<Order>(`${MEAT_API}/orders`, order)
        .pipe(
            map(order => order.id)
        )
    }
    clear(){
        this.cartService.clear();
    }

}