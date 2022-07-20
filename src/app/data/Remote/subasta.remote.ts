import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

}
