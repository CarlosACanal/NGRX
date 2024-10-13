import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadShoppingList } from '../store/shopping-list.actions';

export interface Item {
  name:string;
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
  @Input() items?:Item[] = [{amount: 3, name: 'rexona'}]

  constructor(private store: Store) {}

  removeItem() {

  }

  ngOnInit(): void {
    this.store.dispatch(loadShoppingList());
  }
}
