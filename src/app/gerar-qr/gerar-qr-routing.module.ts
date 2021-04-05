import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerarQrPage } from './gerar-qr.page';

const routes: Routes = [
  {
    path: '',
    component: GerarQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerarQrPageRoutingModule {}
