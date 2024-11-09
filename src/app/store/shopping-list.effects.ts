import { Item } from 'src/app/shopping-list/shopping-list.component';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject, Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { addItemShoppingList, loadShoppingList, loadShoppingListError, loadShoppingListSuccess } from './shopping-list.actions';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';

@Injectable()
export class shoppingListEffects {
  loadShoppingList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadShoppingList),
      mergeMap(() =>
        this.ShoppingListService.getItems().pipe(
          map(entities => loadShoppingListSuccess({ entities })),
          catchError(error => of(loadShoppingListError())
          )
        )
      ))
  );

  constructor(private actions$: Actions, private ShoppingListService: ShoppingListService) { }
}