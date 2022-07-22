import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SesionCokiesService {

  constructor(private cookies:CookieService) {    
  }

  comprobarCokies(data:string):boolean{
    var sesionCookie:string =this.cookies.get(data)
    if(sesionCookie!=""){
      return true;
    }
    return false;
  }

  crearCokiesComprador(id:string){
    this.cookies.set('sesionC', id);

  }

  crearCokiesVendedor(id:string){
    this.cookies.set('sesion', id);
  }
}
