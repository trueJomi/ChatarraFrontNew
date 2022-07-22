import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieSesionService {

 
  constructor(private cookieService: CookieService) { }

  public setCookieC(idC:string){
    this.cookieService.set('sesionC',idC);
  }
  public setCookieV(idV:string){
    this.cookieService.set('sesion',idV);
  }

  public getCookieC(){
    return this.cookieService.get('sesionC');
  }
  public getCookieV(){
    return this.cookieService.get('sesion');
  }

  public deleteCookieC(){
    this.cookieService.delete('sesionC');
  }
  public deleteCookieV(){
    this.cookieService.delete('sesion');
  }

  
}
