
import { createReducer, on } from "@ngrx/store";
import { ShoppingListState } from "./shopping-list.state";
import { ShoppingListActions } from "./shopping-list.actions";

export const initialState: ShoppingListState = {
    entities: [],
    isLoading: false,
    isSaving: false,
    isDeleting: false
}

export const shoppingListReducer = createReducer(
    initialState,
    
    //load
    on(ShoppingListActions.load, (state) => ({
        ...state,
        isLoading: true
    })),

    on(ShoppingListActions.loadSuccess, (state, { entities }) => ({
        ...state,
        entities, //já sobreescreve por ter o mesmo nome
        isLoading: false
    })),

    on(ShoppingListActions.loadError, (state) => ({
        ...state,
        isLoading: false
    })),

    //add
    on(ShoppingListActions.addItem, (state) => ({
        ...state,
        isSaving: true
    })),

    on(ShoppingListActions.addItemSuccess, (state, { item }) => ({
        ...state,
        entities: [...state.entities, item],
        isSaving: false
    })),

    on(ShoppingListActions.addItemError, (state) => ({
        ...state,
        isSaving: false
    })),

    //remove
    on(ShoppingListActions.removeItem, (state, { item }) => ({
        ...state,
        entities: state.entities.filter(i => i.id != item.id),
        //Só ficarão os itens com um id diferente do item que queremos excluir
        isDeleting: true
    })),

    on(ShoppingListActions.removeItemSuccess, (state) => ({
        ...state,
        isDeleting: false
    })),

    on(ShoppingListActions.removeItemError, (state, { item }) => ({
        ...state,
        entities: [...state.entities, item],
        isDeleting: false
    }))
)