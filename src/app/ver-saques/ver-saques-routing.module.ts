import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerSaquesPage } from './ver-saques.page';

const routes: Routes = [
  {
    path: '',
    component: VerSaquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerSaquesPageRoutingModule {}
