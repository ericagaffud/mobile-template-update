import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadCardPage } from './load-card.page';

const routes: Routes = [
  {
    path: '',
    component: LoadCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadCardPageRoutingModule {}
