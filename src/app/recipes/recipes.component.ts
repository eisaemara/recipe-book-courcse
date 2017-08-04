import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipesService } from "./recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'] ,
  providers :[RecipesService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe;
  constructor(private _recipesService:RecipesService) { }

  ngOnInit() {
    this._recipesService.recipeSelected.subscribe((selectedRecipe:Recipe) => {
      this.selectedRecipe = selectedRecipe ;
    } );
  }

}
