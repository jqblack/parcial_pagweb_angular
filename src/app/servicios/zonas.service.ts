import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {CustomRequest} from "../structure/customRequest";
import {Utilidades} from "../structure/utilidades";

@Injectable({
  providedIn: 'root'
})
export class ZonasService {

  constructor(private http : HttpClient) {
    // console.log("MDF BRUH");
  }
  private request: CustomRequest = {f_key: '', f_data: ''};

  Test(){
    this.request.f_key = Utilidades.GetKey();
    this.request.f_data ={};

      return this.http.post('/presto/prestamo/test',Utilidades.createRequest(this.request),{responseType:'text'});
  }

  TestGuardar(codigo : string, nombre : string){

    this.request.f_key = Utilidades.GetKey();

    this.request.f_data ={
      f_codigo : codigo,
      f_descripcion : nombre
    };

    return this.http.post('/presto/prestamo/save',Utilidades.createRequest(this.request))

  }

  BuscarZonas(){

  }

}
