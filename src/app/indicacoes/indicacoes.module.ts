import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicacoesPageRoutingModule } from './indicacoes-routing.module';

import { IndicacoesPage } from './indicacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicacoesPageRoutingModule
  ],
  declarations: [IndicacoesPage]
})
export class IndicacoesPageModule {}
