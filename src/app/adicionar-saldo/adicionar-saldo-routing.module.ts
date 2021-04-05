import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarSaldoPage } from './adicionar-saldo.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarSaldoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarSaldoPageRoutingModule {}
