import { Item } from "src/app/shopping-list/shopping-list.component";

export interface ShoppingListState {
    entities: Item[];
    isLoading: boolean;
    isSaving: boolean;
    isDeleting: boolean;
}

