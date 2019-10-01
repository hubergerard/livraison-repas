import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants: Restaurant[];
  constructor(private service: RestaurantService) { }

  ngOnInit() {
    this.restaurants = this.service.findAll();
  }

}
