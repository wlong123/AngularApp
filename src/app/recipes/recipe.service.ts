import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is a test',
        'https://c.pxhere.com/photos/08/fc/food_dish_rice_thailand_food_thailand_shrimp_fast_food_the_pork_fried_rice_made-1377212.jpg!d',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20),
        ]),
        new Recipe('Another Test Recipe', 'This is a test',
        'https://c.pxhere.com/photos/08/fc/food_dish_rice_thailand_food_thailand_shrimp_fast_food_the_pork_fried_rice_made-1377212.jpg!d',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
