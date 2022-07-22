import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieSesionService } from 'src/app/data/Local/cookie-sesion.local';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  toggle:boolean=false;
  constructor(private router:Router,private cookieService: CookieSesionService) { }

  ngOnInit(): void {
    var sesionCookie:string=this.cookieService.getCookieV();
    if(sesionCookie==""){
      this.router.navigate([''])
    }
    var idUser:number=+sesionCookie;
  }
  toggleSlideBar(){
    this.toggle=!this.toggle
  }

  cerrarSesion(){
    this.cookieService.deleteCookieV()
    this.router.navigate([''])
  }

}
