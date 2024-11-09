import { createAction, props } from "@ngrx/store";
import { Item } from "src/app/shopping-list/shopping-list.component";

export const loadShoppingList = createAction(
    '[Shopping List] Load shopping list'
);

export const loadShoppingListSuccess = createAction(
    '[Shopping List] Load shopping list success',
    props<{entities: Item[]}>()
);

export const loadShoppingListError = createAction(
    '[Shopping List] Load shopping list error',
);

export const addItemShoppingList = createAction(
    '[Shopping List] add an item to shopping list',
    props<{item: Item}>()
) 
