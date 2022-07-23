import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from 'src/app/adapters/Presenter/response.presenter';
import { Propuesta, PropuestaExt } from 'src/app/domain/entities/subasta.entity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropuestaService {

  private apiBase: string=environment.apiOrquestador;
  private controller: string='/propuesta';
  constructor(private http:HttpClient) { }
  
  ObtenerMayor(idSubasta:number){
    return this.http.get<Response<PropuestaExt>>(`${this.apiBase}${this.controller}/mayor/${idSubasta}`)
  }

  CrearPropuesta(propuesta:Propuesta){
    return this.http.post<Response<Propuesta>>(`${this.apiBase}${this.controller}`,propuesta)
  }
  RetirarseDeSubasta(idSubasta:number,idComprador:number){
    return this.http.delete(`${this.apiBase}${this.controller}/${idSubasta}/${idComprador}`)
  }



}
