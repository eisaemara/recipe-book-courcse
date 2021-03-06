import { RecipesService } from './../../recipes.service';
import { Component, OnInit , Input } from '@angular/core';
import {Recipe } from '../../recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() index : number ;
  @Input() recipe:Recipe;

  constructor(private _recipesService:RecipesService) { }

  ngOnInit() {
  }

  // onSelectRecipe()
  // {
  //        this._recipesService.recipeSelected.emit(this.recipe);
  // }

}
