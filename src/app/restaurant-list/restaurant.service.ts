import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  RESTAURANTS = [
    new Restaurant('Le restau', 'https://google.fr/img.png', '3 rue du ponton, Toulouse', 'test@test.fr'),
    new Restaurant('Le restau2', 'https://google.fr/img.png', '3 rue du ponton, Toulouse', 'test@test.fr'),
    new Restaurant('Le restau3', 'https://google.fr/img.png', '3 rue du ponton, Toulouse', 'test@test.fr'),
  ]
  constructor() { }

  findAll() {
    return this.RESTAURANTS;
  }
}
