import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { SeleccionPersonajeComponent } from './paginas/seleccion-personaje/seleccion-personaje.component';
import { NuevoPersonajeComponent } from './paginas/nuevo-personaje/nuevo-personaje.component';
import { MapaComponent } from './paginas/mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SeleccionPersonajeComponent,
    NuevoPersonajeComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
