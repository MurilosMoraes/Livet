import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferenciaDetailsPage } from './transferencia-details.page';

const routes: Routes = [
  {
    path: '',
    component: TransferenciaDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferenciaDetailsPageRoutingModule {}
