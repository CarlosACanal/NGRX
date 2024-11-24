import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getShoppingList, getShoppingListIsLoading } from '../store/shopipng-list.selectors';
import { ShoppingListActions } from '../store/shopping-list.actions';

export interface Item {
  id: number;
  name: string;
  amount: number;
}

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  @Input() items?: Item[] = [];

  private store = inject(Store);

  shoppingList$ = this.store.select(getShoppingList);
  loadingList$ = this.store.select(getShoppingListIsLoading);

  removeItem(item: Item) {
    this.store.dispatch(ShoppingListActions.removeItem({ item }))
  }


  ngOnInit(): void {
    this.store.dispatch(ShoppingListActions.load());
  }
}
