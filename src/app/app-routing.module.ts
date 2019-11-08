import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EjemploComponent } from './componentes/ejemplo/ejemplo.component';
import { Error404Component } from './componentes/error404/error404.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'ejemplo',
    component: EjemploComponent
  },
  {
    path: 'detalles',
    component: DetallesComponent
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
