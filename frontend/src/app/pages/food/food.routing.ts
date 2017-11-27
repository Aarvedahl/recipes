import { Routes, RouterModule } from '@angular/router';

import { FoodComponent } from './food.component';

const routes: Routes = [
  {
    path: '',
    component: FoodComponent
  }
];

export const routing = RouterModule.forChild(routes);
