import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormacionAcademicaPageRoutingModule } from './formacion-academica-routing.module';

import { FormacionAcademicaPage } from './formacion-academica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormacionAcademicaPageRoutingModule
  ],
  declarations: [FormacionAcademicaPage]
})
export class FormacionAcademicaPageModule {}
