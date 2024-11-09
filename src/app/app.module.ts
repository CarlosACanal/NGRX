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
import { EffectsModule } from '@ngrx/effects';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { shoppingListEffects } from './store/shopping-list.effects';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingListComponent,
    ReactiveFormsModule,
    FormsModule,
    //Aqui eu informo os reducers
    StoreModule.forRoot({
      ShoppingListState: shoppingListReducer,
      count: counterReducer
    },),
    //aqui só tera os ultimos 25 logs no devtools
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      trace: true
    }),
    EffectsModule.forRoot([shoppingListEffects]),
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
