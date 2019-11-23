import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {makeParamDecorator} from "@angular/core/src/util/decorators";
import {ZonasService} from "../../servicios/zonas.service";
import{CustomRequest} from "../../structure/customRequest";
import  Swal from 'sweetalert2';
import {MatTableDataSource} from "@angular/material";
import {Utilidades} from "../../structure/utilidades";

@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form){
    border: 1px solid red;
  }`]
})
export class ZonasComponent implements OnInit {

  constructor(private zonaservice : ZonasService) { }

  ngOnInit() {

  }

  zona : Object = {
    codigo : null,
    nombre : null
  };

  ListaZona : any = [];

  cargando : boolean = false;

  Guardar(form : NgForm){

    console.log("Valores: ",form.value.namezona);

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });

    Swal.showLoading();

    this.zonaservice.TestGuardar(form.value.codzona,form.value.namezona)
      .subscribe(resp =>{
        console.log(resp);
        Swal.close();

        if(resp['key']){

          Swal.fire({
            icon: 'success',
            text: resp['msj']
          });

        }
        else{

          Swal.fire({
            icon: 'error',
            text: resp['msj']
          });

        }

        form.onReset();

      });


    Swal.showLoading();
  }

  TestAPI(){
    this.zonaservice.Test()
      .subscribe(resp =>{
        // console.log(resp);
// console.log(Utilidades.decodeRequest(resp));

        resp = Utilidades.decodeRequest(resp);
        // console.log(Utilidades.ValidarToken(resp));
        if (Utilidades.ValidarToken(resp)){
          this.ListaZona = resp['f_data'];
          // console.log(resp);
        }
      })
  }



}
