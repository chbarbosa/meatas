import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { RestaurantsService } from '../restaurants/restaurants.service';
import { Restaurant } from './../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-detalhe-restaurant',
  templateUrl: './detalhe-restaurant.component.html',
  styleUrls: ['./detalhe-restaurant.component.css']
})
export class DetalheRestaurantComponent implements OnInit {

  restaurant: Restaurant;

  constructor(
    private restaurantservice: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.restaurantservice
      .restaurantById(this.route.snapshot.params['id'])
      .subscribe(retorno => this.restaurant = retorno);
  }

}
