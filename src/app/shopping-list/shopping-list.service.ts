import { Injectable } from '@angular/core';
import { Item } from './shopping-list.component';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  items: Item[] = [
    {
      id: 1,
      name: 'milk',
      amount: 3
    }, {
      id: 2,
      amount: 3,
      name: 'rexona'
    }]

  getItems(): Observable<Item[]> {
    return of(this.items).pipe(
      delay(2000)
    )
  }

  addItem(item: { name: string, amount: number }): Observable<Item> {
    const newItem = { ...item, id: this.items.length + 1 }

    this.items = [...this.items, newItem]

    return of(newItem)
  }

  removeItem(item: Item): Observable<Item> {
    this.items = this.items.filter(i => i.id != item.id);

    return of(item);
  }

}
