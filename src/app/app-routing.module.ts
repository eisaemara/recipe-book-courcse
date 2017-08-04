import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

const appRouters:Routes =[
    {path:'' , redirectTo:'/recipes' , pathMatch:'full' } ,
    {path:'recipes' , component:RecipesComponent 
    , children :[
      {path :'new' , component:RecipeEditComponent }  
    , { path:":id/view" , component : RecipeDetailComponent } 
    , { path:':id/edit' , component:RecipeEditComponent } 
      ] 
   } ,
    {path:'shoppingList' , component:ShoppingListComponent }
    ];

@NgModule({
    imports:[RouterModule.forRoot(appRouters)] ,
    exports:[RouterModule]
})
export class AppRoutingModule{
   




}