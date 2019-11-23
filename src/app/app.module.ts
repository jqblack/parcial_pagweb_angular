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
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material";
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { AgenteComponent } from './componentes/agente/agente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NabvarComponent,
    PrestamoComponent,
    UsuariosComponent,
    ZonasComponent,
    ClientesComponent,
    AgenteComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
