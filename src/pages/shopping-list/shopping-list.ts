import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../../services/shopping-list';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  listItems: Ingredient[];

  constructor(private slService: ShoppingListService) {

  }

  onAddItem(form: NgForm) {
    this.slService.addItem(form.value.ingredientName, form.value.amount);
    form.reset();
    this.loadItems();
  }

  ionViewWillEnter() {
    this.listItems = this.slService.getItems();
    this.loadItems();
  }

  private loadItems() {
    this.listItems = this.slService.getItems();
  }

  onCheckItem(index: number) {
    this.slService.removeItem(index);
    this.loadItems();
  }

}
