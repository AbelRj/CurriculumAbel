import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConocimientoPageRoutingModule } from './conocimiento-routing.module';

import { ConocimientoPage } from './conocimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConocimientoPageRoutingModule
  ],
  declarations: [ConocimientoPage]
})
export class ConocimientoPageModule {}
