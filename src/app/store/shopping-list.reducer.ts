import { addItemShoppingList, addItemShoppingListError, addItemShoppingListSuccess, loadShoppingList, loadShoppingListError, loadShoppingListSuccess, removeItemShoppingList, removeItemShoppingListError, removeItemShoppingListSuccess } from './shopping-list.actions';
import { createReducer, on } from "@ngrx/store";
import { ShoppingListState } from "./shopping-list.state";

export const initialState: ShoppingListState = {
    entities: [],
    isLoading: false,
    isSaving: false,
    isDeleting: false
}

export const shoppingListReducer = createReducer(
    initialState,
    
    //load
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
    })),

    //add
    on(addItemShoppingList, (state) => ({
        ...state,
        isSaving: true
    })),

    on(addItemShoppingListSuccess, (state, { item }) => ({
        ...state,
        entities: [...state.entities, item],
        isSaving: false
    })),

    on(addItemShoppingListError, (state) => ({
        ...state,
        isSaving: false
    })),

    //remove
    on(removeItemShoppingList, (state, { item }) => ({
        ...state,
        entities: state.entities.filter(i => i.id != item.id),
        //Só ficarão os itens com um id diferente do item que queremos excluir
        isDeleting: true
    })),

    on(removeItemShoppingListSuccess, (state) => ({
        ...state,
        isDeleting: false
    })),

    on(removeItemShoppingListError, (state, { item }) => ({
        ...state,
        entities: [...state.entities, item],
        isDeleting: false
    }))
)