import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'food', pathMatch: 'full' },
      { path: 'food', loadChildren: './food/food.module#FoodModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
