import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SearchingredientComponent } from './searchingredient/searchingredient.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    SearchingredientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
