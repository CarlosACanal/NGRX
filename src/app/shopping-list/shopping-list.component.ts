import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItemShoppingList, loadShoppingList } from '../store/shopping-list.actions';
import { getShoppingList, getShoppingListIsLoading } from '../store/shopipng-list.selectors';

export interface Item {
  id?: number;
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
  shoppingList$ = this.store.select(getShoppingList);
  loadingList$ = this.store.select(getShoppingListIsLoading);

  constructor(private store: Store) { }

  removeItem() {

  }

  addItem(): void {
    this.store.dispatch(addItemShoppingList({item: {amount:2, name:'dasjidj'}}))
  }

  ngOnInit(): void {
    this.store.dispatch(loadShoppingList());
  }
}
