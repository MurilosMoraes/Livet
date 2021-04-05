import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarSaldoPageRoutingModule } from './adicionar-saldo-routing.module';

import { AdicionarSaldoPage } from './adicionar-saldo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarSaldoPageRoutingModule
  ],
  declarations: [AdicionarSaldoPage]
})
export class AdicionarSaldoPageModule {}
