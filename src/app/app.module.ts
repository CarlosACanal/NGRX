import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/reducers/counter.reducer';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { shoppingListReducer } from './store/shopping-list.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }),
    ShoppingListComponent,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({
      shoppingList: shoppingListReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
