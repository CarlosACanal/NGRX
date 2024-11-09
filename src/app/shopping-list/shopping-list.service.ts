import { Injectable } from '@angular/core';
import { Item } from './shopping-list.component';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }

  items: Item[] = [
    {
      id: 1,
      name: 'milk',
      amount: 3
    }, {
      amount: 3,
      name: 'rexona'
    }]

  getItems(): Observable<Item[]> {
    return of(this.items).pipe(
      delay(2000)
    )
  }

  addItem(item: Item): Observable<Item[]> {
    this.items = [...this.items, item];
    return of(this.items)
  }
}
