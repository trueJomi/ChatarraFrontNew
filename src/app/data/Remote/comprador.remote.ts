import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comprador } from 'src/app/domain/entities/clients.entity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompradorService {
  private apiBase: string=environment.apiOrquestador;
  constructor(private http:HttpClient) { }

  public loginComprador(comprador: Comprador){
    return this.http.post(`${this.apiBase}/comprador/login`,comprador)
  }
  createComprador(comprador:Comprador){
    return this.http.post<Comprador>(`${this.apiBase}/comprador/resgister`,comprador);
  }
}
