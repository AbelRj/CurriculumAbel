import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'datos-personales',
    loadChildren: () => import('./datos-personales/datos-personales.module').then( m => m.DatosPersonalesPageModule)
  },
  {
    path: 'objetivo',
    loadChildren: () => import('./objetivo/objetivo.module').then( m => m.ObjetivoPageModule)
  },
  {
    path: 'formacion-academica',
    loadChildren: () => import('./formacion-academica/formacion-academica.module').then( m => m.FormacionAcademicaPageModule)
  },
  {
    path: 'conocimiento',
    loadChildren: () => import('./conocimiento/conocimiento.module').then( m => m.ConocimientoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
