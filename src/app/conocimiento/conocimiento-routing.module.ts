import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConocimientoPage } from './conocimiento.page';

const routes: Routes = [
  {
    path: '',
    component: ConocimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConocimientoPageRoutingModule {}
