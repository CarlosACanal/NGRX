import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectCount } from './counter/selectors/counter.selectors';
import { decrement, increment } from './counter/actions/counter.actions';
import { Item } from './shopping-list/shopping-list.component';
import { getShoppingList } from './store/shopipng-list.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx';
  count$: Observable<number>;
  list$: Observable<Item[]>

  constructor(private store: Store) {
    this.count$ = this.store.select(SelectCount);
    this.list$ = this.store.select(getShoppingList);
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

}
