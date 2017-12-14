import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

import { OrderService } from './order.service';
import { RadionOption } from './../shared/radio/radionOption-model';
import { Order, OrderItem } from "app/order/order.model";
import { CartItem } from './../detalhe-restaurant/shopping-cart/cart-item.model';
import { Router } from "@angular/router";

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  delivery: number = 8;

  paymentOptions: RadionOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'},
  ];

  constructor(private orderService: OrderService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: '',
      email: '',
      emailConfirmation: '',
      address: '',
      number: '',
      optionalAddress: '',
      paymentOption: ''
    });
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems():CartItem[]{
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order){
    order.orderItems = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order).subscribe(
      (orderId: string) => {
        this.router.navigate(['/order-summary']);
        this.orderService.clear();
      });
    console.log(order);
  }
}
