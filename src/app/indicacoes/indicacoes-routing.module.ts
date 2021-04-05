import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicacoesPage } from './indicacoes.page';

const routes: Routes = [
  {
    path: '',
    component: IndicacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicacoesPageRoutingModule {}
