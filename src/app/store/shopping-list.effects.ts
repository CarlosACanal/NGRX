import { Item } from 'src/app/shopping-list/shopping-list.component';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { catchError, delay, map, mergeMap, of, switchMap } from 'rxjs';
import { ShoppingListActions } from './shopping-list.actions';

@Injectable()
export class shoppingListEffects {
  loadShoppingList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingListActions.load),
      switchMap(() =>
        this.ShoppingListService.getItems().pipe(
          map(entities => ShoppingListActions.loadSuccess({ entities })),
          catchError(error => of(ShoppingListActions.loadError())
          )
        )
      ))
  );

  addShoppingListEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingListActions.addItem),
      delay(2000),
      mergeMap(({ item }) =>
        this.ShoppingListService.addItem(item).pipe(
          map(item => ShoppingListActions.addItemSuccess({ item })),
          catchError(() => of(ShoppingListActions.addItemError()))
        ))
    )
  );

  removeShoppingListEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingListActions.removeItem),
      mergeMap(({ item }) =>
        this.ShoppingListService.removeItem(item).pipe(
          map(() => ShoppingListActions.removeItemSuccess()),
          catchError(() => of(ShoppingListActions.removeItemError({ item })))
        ))
    ))

  constructor(private actions$: Actions, private ShoppingListService: ShoppingListService) { }
}