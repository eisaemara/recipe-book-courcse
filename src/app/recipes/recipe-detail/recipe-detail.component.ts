import { ShoppingListService } from './../../shared/shopping-list.service';
import { RecipesService } from './../recipes.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe : Recipe ;
  index:number;
  constructor(private _slService:ShoppingListService, private _route:ActivatedRoute , private _recipesService:RecipesService ) { }

  ngOnInit() {
    this.index = this._route.snapshot.params["id"];
    this.recipe = this._recipesService.findRecipeById(this.index) ;
    this._route.params.subscribe((params)=>{
       this.index  = params["id"];
       this.recipe = this._recipesService.findRecipeById(this.index) ;
    });
  }

  onAddedToShoppingList()
  {
     this._slService.addedIngredients(this.recipe.ingredients);
  }



}
