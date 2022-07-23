import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from 'src/app/adapters/Presenter/response.presenter';
import { Subasta } from 'src/app/domain/entities/subasta.entity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccionesCompradorService {
  apiBase:string=environment.apiOrquestador;
  controller:string="/comprador"
  constructor(private http:HttpClient) {}
  
  Recogiendo(Subasta:Subasta){
    return this.http.put<Response<Subasta>>(`${this.apiBase}${this.controller}/recogiendo`,Subasta)
  }
  CompletarComprador(id:number){
    return this.http.put<Response<Subasta>>(`${this.apiBase}${this.controller}/completar/${id}`,null)
  }
}
