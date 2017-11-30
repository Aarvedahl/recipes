import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FoodComponent } from './food.component';
import { routing } from './food.routing';
import { SearchInputComponent } from './searchInput';
import { FoodTableComponent } from './foodtable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    FoodComponent,
    SearchInputComponent,
    FoodTableComponent
    ]
})
export class FoodModule {}
