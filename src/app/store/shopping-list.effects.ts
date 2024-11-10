import { Item } from 'src/app/shopping-list/shopping-list.component';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { addItemShoppingList, addItemShoppingListError, addItemShoppingListSuccess, loadShoppingList, loadShoppingListError, loadShoppingListSuccess, removeItemShoppingList, removeItemShoppingListError, removeItemShoppingListSuccess } from './shopping-list.actions';
import { catchError, delay, map, mergeMap, of, switchMap } from 'rxjs';

@Injectable()
export class shoppingListEffects {
  loadShoppingList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadShoppingList),
      switchMap(() =>
        this.ShoppingListService.getItems().pipe(
          map(entities => loadShoppingListSuccess({ entities })),
          catchError(error => of(loadShoppingListError())
          )
        )
      ))
  );

  addShoppingListEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(addItemShoppingList),
      delay(2000),
      mergeMap(({ item }) =>
        this.ShoppingListService.addItem(item).pipe(
          map(item => addItemShoppingListSuccess({ item })),
          catchError(() => of(addItemShoppingListError()))
        ))
    )
  );

  removeShoppingListEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(removeItemShoppingList),
      mergeMap(({ item }) =>
        this.ShoppingListService.removeItem(item).pipe(
          map(() => removeItemShoppingListSuccess()),
          catchError(() => of(removeItemShoppingListError({ item })))
        ))
    ))

  constructor(private actions$: Actions, private ShoppingListService: ShoppingListService) { }
}