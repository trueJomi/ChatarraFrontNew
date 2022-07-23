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

  isEmptyCookieC(){
    if(this.getCookieC() == ""){
      return true
    }
    return false
  }

  isEmptyCookieV(){
    if(this.getCookieV() == ""){
      return true
    }
    return false
  }

  getCookieC():string{
    return this.cookieService.get('sesionC')
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
