import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cargando : boolean = false;

  Guardar(){
    this.cargando = true;
    setTimeout( ()=>this.cargando = false,3000);
  }

}
