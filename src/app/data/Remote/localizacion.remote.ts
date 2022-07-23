import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalizacionService {
  private apiBase: string=environment.apiOrquestador;
  constructor(private http:HttpClient) { }

  ObtenerLista(){
    return this.http.get(this.apiBase+'/localization/departamento');
  }
}
