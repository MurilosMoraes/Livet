import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferenciaDetailsPageRoutingModule } from './transferencia-details-routing.module';

import { TransferenciaDetailsPage } from './transferencia-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferenciaDetailsPageRoutingModule
  ],
  declarations: [TransferenciaDetailsPage]
})
export class TransferenciaDetailsPageModule {}
