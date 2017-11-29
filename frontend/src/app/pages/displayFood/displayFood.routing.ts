import { Routes, RouterModule } from '@angular/router';

import { DisplayFoodComponent } from './displayFood.component';

const routes: Routes = [
  {
    path: '',
    component: DisplayFoodComponent
  }
];

export const routing = RouterModule.forChild(routes);
