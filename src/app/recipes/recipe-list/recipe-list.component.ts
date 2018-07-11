import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() clickRecipe = new EventEmitter<Recipe>();
  @Input() recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test', 'https://c.pxhere.com/photos/08/fc/food_dish_rice_thailand_food_thailand_shrimp_fast_food_the_pork_fried_rice_made-1377212.jpg!d'),
    new Recipe('Another Test Recipe', 'This is a test', 'https://c.pxhere.com/photos/08/fc/food_dish_rice_thailand_food_thailand_shrimp_fast_food_the_pork_fried_rice_made-1377212.jpg!d')
  ];

  constructor() { }

  ngOnInit() {
  }

  onClickRecipe(recipe: Recipe) {
    this.clickRecipe.emit(recipe);
  }

}
