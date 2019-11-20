import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS
import {APP_ROUTING} from "./app.routes";


import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NabvarComponent } from './componentes/nabvar/nabvar.component';
import { PrestamoComponent } from './componentes/prestamo/prestamo.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ZonasComponent } from './componentes/zonas/zonas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NabvarComponent,
    PrestamoComponent,
    UsuariosComponent,
    ZonasComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
