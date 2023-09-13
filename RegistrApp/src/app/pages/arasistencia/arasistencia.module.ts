import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ARasistenciaPageRoutingModule } from './arasistencia-routing.module';

import { ARasistenciaPage } from './arasistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ARasistenciaPageRoutingModule
  ],
  declarations: [ARasistenciaPage]
})
export class ARasistenciaPageModule {}
