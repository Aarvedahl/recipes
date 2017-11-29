import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DisplayFoodComponent } from './displayFood.component';
import { routing } from './displayFood.routing';
import { FoodTableComponent } from './foodtable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    DisplayFoodComponent,
    FoodTableComponent
  ]
})
export class DisplayFoodModule {}
