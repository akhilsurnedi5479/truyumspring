import { Component, OnInit } from '@angular/core';
import { Food } from '../food.model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[FoodService]
})
export class MenuComponent implements OnInit {
  foods:Food[];
  constructor(private foodService:FoodService) {
   }

  ngOnInit() {
    this.foodService.getfoods().subscribe((food:Food[])=>{
      this.foods=[...food];
    })
  }

}
