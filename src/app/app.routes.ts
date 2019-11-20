import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./componentes/home/home.component";
import {PrestamoComponent} from "./componentes/prestamo/prestamo.component";
import {UsuariosComponent} from "./componentes/usuarios/usuarios.component";
import {ZonasComponent} from "./componentes/zonas/zonas.component";


const APP_ROUTES : Routes=[
  {path:'home',component: HomeComponent},
  {path:'prestamo',component: PrestamoComponent},
  {path:'usuario',component: UsuariosComponent},
  {path:'zona',component: ZonasComponent},
  {path: '**',pathMatch:'full',redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
