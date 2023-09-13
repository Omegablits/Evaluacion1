import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ARasistenciaPage } from './arasistencia.page';

const routes: Routes = [
  {
    path: '',
    component: ARasistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ARasistenciaPageRoutingModule {}
