import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../../shared/shopping-list.service';
import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @ViewChild('name') nameRef:ElementRef ;
  // @ViewChild('amount') amountRef:ElementRef ;
  @ViewChild('form') form: NgForm;
  editSubscription: Subscription;
  editIndex: number;
  editMode: boolean = false;

  constructor(private _slService: ShoppingListService) { }

  ngOnInit() {
    this.editSubscription = this._slService.startedEdit.subscribe((index) => {
      const ingredient = this._slService.getIngredient(index);
      this.form.setValue({ 'name': ingredient.name, 'amount': ingredient.amount });
      this.editMode = true;
      this.editIndex = index;
    });
  }
  onAddItem() {
    if (this.form.valid) {
      if (this.editMode) {
        this.onEditItem();
      } else {
        const values = this.form.value;
        let newIng = new Ingredient(values.name, values.amount);
        this._slService.addedIngredient(newIng);
        this.form.form.reset();
      }
    }
  }
  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }

  onEditItem() {

    const values = this.form.value;
    let newIng = this._slService.getIngredient(this.editIndex);
    newIng.name = values.name;
    newIng.amount = values.amount;
    this.form.form.reset();
    this.editMode = false;
  }

  onDelete()
  {
    this.form.reset() ;
    this.editMode=false;
    this._slService.removeIngredient(this.editIndex);
  }


  // onAddIngredient()
  // {
  //   const ingName = this.nameRef.nativeElement.value ;
  //   const ingAmount = this.amountRef.nativeElement.value;
  //   let newIng = new Ingredient(ingName,ingAmount) ;
  //   this._slService.addedIngredient(newIng);
  // }


}
