import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarAPageRoutingModule } from './registrar-a-routing.module';

import { RegistrarAPage } from './registrar-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarAPageRoutingModule
  ],
  declarations: [RegistrarAPage]
})
export class RegistrarAPageModule {}
