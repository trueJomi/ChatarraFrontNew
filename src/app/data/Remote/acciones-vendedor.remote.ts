import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from 'src/app/adapters/Presenter/response.presenter';
import { Subasta } from 'src/app/domain/entities/subasta.entity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccionesVendedorService {

  apiBase:string=environment.apiOrquestador;
  controller:string="/vendedor"
  constructor(private http:HttpClient) {}

  AsignarPropuesta(id:number){
    return this.http.put<Response<Subasta>>(`${this.apiBase}${this.controller}/eleccion/${id}`,null)
  }
  AsignacionAnulada(id:number){
    return this.http.put<Response<Subasta>>(`${this.apiBase}${this.controller}/eleccionAnulada/${id}`,null)
  }

  CompletarVendedor(id:number){
    return this.http.put<Response<Subasta>>(`${this.apiBase}${this.controller}/completar/${id}`,null)
  }

}
