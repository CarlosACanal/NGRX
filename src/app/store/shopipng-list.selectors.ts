import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShoppingListState } from "./shopping-list.state";

const getShoppingListState = createFeatureSelector<ShoppingListState>('ShoppingListState');

export const getShoppingList = createSelector(
    getShoppingListState, 
    (state: ShoppingListState) => state?.entities
);

export const getShoppingListIsLoading = createSelector(
    getShoppingListState,
    (state: ShoppingListState) => state.isLoading
);

export const getShoppingListItemIsSaving = createSelector(
    getShoppingListState,
    (state: ShoppingListState) => state.isSaving
)