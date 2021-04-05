import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerSaquesPageRoutingModule } from './ver-saques-routing.module';

import { VerSaquesPage } from './ver-saques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerSaquesPageRoutingModule
  ],
  declarations: [VerSaquesPage]
})
export class VerSaquesPageModule {}
