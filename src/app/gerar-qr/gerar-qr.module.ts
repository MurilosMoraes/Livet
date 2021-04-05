import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerarQrPageRoutingModule } from './gerar-qr-routing.module';

import { GerarQrPage } from './gerar-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerarQrPageRoutingModule
  ],
  declarations: [GerarQrPage]
})
export class GerarQrPageModule {}
