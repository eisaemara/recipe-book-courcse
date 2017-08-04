import { ShoppingListService } from './../shared/shopping-list.service';
import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] ;

  constructor(private _slService:ShoppingListService) { }

  ngOnInit() {
  this.ingredients =  this._slService.getIngredients();
  }
 
onAddedIngredient(data){
  this.ingredients.push(data);
}

onItemEdit(index:number)
{
  this._slService.startedEdit.next(index);
}


}
