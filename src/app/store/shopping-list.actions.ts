import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Item } from "src/app/shopping-list/shopping-list.component";

export interface baseItem {
    name: string,
    amount: number
}

// Ações de lista de compras
export const ShoppingListActions = createActionGroup({
    source: '[Shopping List]',
    events: {
      load: emptyProps(),
      loadSuccess: props<{ entities: Item[] }>(),
      loadError: emptyProps(),
      
      addItem: props<{ item: baseItem }>(),
      addItemSuccess: props<{ item: Item }>(),
      addItemError: emptyProps(),
      
      removeItem: props<{ item: Item }>(),
      removeItemSuccess: emptyProps(),
      removeItemError: props<{ item: Item }>()
    }
  });


//FORMA INDIVIDUAL

// //List
// export const loadShoppingList = createAction(
//     '[Shopping List] Load shopping list'
// );

// export const loadShoppingListSuccess = createAction(
//     '[Shopping List Effects] Load shopping list success',
//     props<{ entities: Item[] }>()
// );

// export const loadShoppingListError = createAction(
//     '[Shopping List Effects] Load shopping list error',
// );

// //item
// export const addItemShoppingList = createAction(
//     '[Add Item] add an item to shopping list',
//     props<{ item: baseItem }>()
// )

// export const addItemShoppingListSuccess = createAction(
//     '[Shopping List Effects] add item to shopping list success',
//     props<{ item: Item }>()
// )

// export const addItemShoppingListError = createAction(
//     '[Shopping List Effects] Add item do shopping list error'
// )

// //remove
// export const removeItemShoppingList = createAction(
//     '[Shopping List] remove an item to shopping list',
//     props<{ item: Item }>()
// )

// export const removeItemShoppingListSuccess = createAction(
//     '[Shopping List Effects] remove shopping list item successs'
// )

// export const removeItemShoppingListError = createAction(
//     '[Shopping List Effects] remove shopping list item error',
//     props<{ item: Item }>()
// )
