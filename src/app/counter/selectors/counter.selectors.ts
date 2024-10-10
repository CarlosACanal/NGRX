import { createFeatureSelector, createSelector } from "@ngrx/store";

// seleciona o estado do contador na store (modulo)
export const selectCounterState = createFeatureSelector<number>('count');

// select para pegar valor atual do contador
export const SelectCount = createSelector(
    selectCounterState,
    (state) => state
);

