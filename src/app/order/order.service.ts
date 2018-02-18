import { User } from './../../../backend/users';
import { LoginService } from './../security/login/login.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import { ShoppingCartService } from './../detalhe-restaurant/shopping-cart/shopping-cart.service';
import { Order } from "app/order/order.model";
import { CartItem } from './../detalhe-restaurant/shopping-cart/cart-item.model';

import { MEAT_API } from './../app.api';

@Injectable()
export class OrderService{

    constructor(private cartService: ShoppingCartService, 
                private http: HttpClient,
                private loginService: LoginService) {

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
        let headers = new HttpHeaders()
        if (this.loginService.isLoggedIn) {
            headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)
        }

        return this.http.post<Order>(`${MEAT_API}/orders`, order, {headers: headers})
                                .map(order => order.id);
    }
    clear(){
        this.cartService.clear();
    }

}