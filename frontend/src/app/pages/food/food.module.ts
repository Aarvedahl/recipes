import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchInputs } from './searchInput';

import { FoodComponent } from './food.component';
import { routing } from './food.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    FoodComponent.
    SearchInputs
  ]
})
export class FoodModule {}
