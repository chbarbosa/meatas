import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {MEAT_API} from '../app.api';
import { HandlerError } from './../app.error-handler';
import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from './../detalhe-restaurant/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService{

    constructor(private http: Http){}

    restaurants(search?: string): Observable<Restaurant[]> {
      return this.http.get(`${MEAT_API}/restaurants`, {params: {q: search}})
      .map(response => response.json())
      .catch(HandlerError.handleError);
    }
    restaurantById(id: string): Observable<Restaurant> {
      return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(HandlerError.handleError);
    }
    reviewsOfrestaurant(id: string): Observable<any> {
      return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(HandlerError.handleError);
    }
    menuOfrestaurant(id: string): Observable<MenuItem[]> {
      return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(HandlerError.handleError);
    }

}