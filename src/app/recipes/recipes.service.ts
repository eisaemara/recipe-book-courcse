import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";


@Injectable()
export class RecipesService {
private recipes: Recipe[] = [
    new Recipe( 'A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [new Ingredient('Meat',2),new Ingredient('Bread',1)]
    ),
    new Recipe('A Test Recipe2', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg' ,
    [new Ingredient('Chiken',2),new Ingredient('Bread',1)]
    )
  ];
 recipeSelected = new EventEmitter<Recipe>();
  constructor() { }
 
 getRecipes():Recipe[]
 {
  return  this.recipes ;//.slice();
 }

 findRecipeById(id:number) : Recipe{
   return this.recipes.slice()[id] ;
 }

 addRecipe(recipe:Recipe)  
 {
   this.recipes.push(recipe);
 }
}
