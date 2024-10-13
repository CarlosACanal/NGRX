import { loadShoppingList, loadShoppingListError, loadShoppingListSuccess } from './shopping-list.actions';
import { createReducer, on } from "@ngrx/store";
import { ShoppingListState } from "./shopping-list.state";

export const initialState: ShoppingListState = {
    entities: [],
    isLoading: false
}

export const shoppingListReducer = createReducer(
    initialState,
    on(loadShoppingList, (state) => ({
        ...state,
        isLoading: true
    })),

    on(loadShoppingListSuccess, (state, { entities }) => ({
        ...state,
        entities, //já sobreescreve por ter o mesmo nome
        isLoading: false
    })),

    on(loadShoppingListError, (state) => ({
        ...state,
        isLoading: false
    }))
)