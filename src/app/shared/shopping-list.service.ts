import { Ingredient } from './ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class ShoppingListService {
 private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  
  constructor() { }
  
  startedEdit:Subject<number> = new Subject<number>();

  getIngredients()
  {
    return this.ingredients;
  }

  addedIngredient(newIng:Ingredient)
  {
    this.ingredients.push(newIng);
  }

  addedIngredients(ingredients:Ingredient[]){
     this.ingredients.push(...ingredients);
  }

  getIngredient(index:number):Ingredient{
    return this.ingredients[index];
  }
  
  removeIngredient(index:number)
  {
    this.ingredients.splice(index,1);
  }

}
