import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendedor } from 'src/app/domain/entities/clients.entity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  private apiBase: string=environment.apiOrquestador;
  constructor(private http:HttpClient) { }

  public loginVendedor(vendedor: Vendedor){
    return this.http.post(`${this.apiBase}/vendedor/login`,vendedor)
  }
}
