import { Recipe } from './../recipe.model';
import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  
  recipeForm:FormGroup;

  constructor(private _recipesService:RecipesService) { }

  ngOnInit() {
    this.recipeForm = new FormGroup({
      'name' : new FormControl(null) ,
      'url' : new FormControl(null) ,
      'description':new FormControl(null) ,
      'ingName' : new FormControl(null) ,
      'ingAmount':new FormControl(null)
    });
  }

  onSubmit()
  {
    const values= this.recipeForm.value ;
    const recipe = new Recipe(values.name, values.description,values.url,null);
      this._recipesService.addRecipe(recipe);
  }

}
