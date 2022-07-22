import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from 'src/app/adapters/Presenter/response.presenter';
import { Subasta } from 'src/app/domain/entities/subasta.entity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubastaService {
  private apiBase: string=environment.apiOrquestador;
  private controller: string='/subasta';
  constructor(private http:HttpClient) { }

  Listar(id:number){
    return this.http.get<Subasta[]>(`${this.apiBase}${this.controller}/mis/${id}`);
  }
  ListarPorComprador(id:number){
    return this.http.get<Subasta[]>(`${this.apiBase}${this.controller}/misc/${id}`)
  }
  CrearSubasta(subasta:Subasta){
    return this.http.post<Response<Subasta>>(`${this.apiBase}${this.controller}`,subasta)
  }
  EditarSuvasta(subasta:Subasta){
    return this.http.put<Response<Subasta>>(`${this.apiBase}${this.controller}`,subasta)
  }

}
