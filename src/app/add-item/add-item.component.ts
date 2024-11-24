
import { Component, inject, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { getShoppingListItemIsSaving } from '../store/shopipng-list.selectors';
import { ShoppingListActions } from '../store/shopping-list.actions';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  name: string = '';
  amount?: number;
  isSaving$ = this.store.select(getShoppingListItemIsSaving);

  constructor(private store: Store) { }

  addItem() {
    this.store.dispatch(ShoppingListActions.addItem(
      {
        item: {
          name: this.name,
          amount: this.amount || 1
        }
      }
    ))
  }
}
