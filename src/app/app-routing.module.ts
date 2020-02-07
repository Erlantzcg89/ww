import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { SeleccionPersonajeComponent } from './paginas/seleccion-personaje/seleccion-personaje.component';
import { NuevoPersonajeComponent } from './paginas/nuevo-personaje/nuevo-personaje.component';
import { MapaComponent } from './paginas/mapa/mapa.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'seleccion-personaje', component: SeleccionPersonajeComponent },
  { path: 'nuevo-personaje', component: NuevoPersonajeComponent },
  { path: 'mapa', component: MapaComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: "/login" }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }