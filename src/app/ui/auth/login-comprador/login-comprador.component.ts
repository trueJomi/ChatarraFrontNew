import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieSesionService } from 'src/app/data/Local/cookie-sesion.local';
import { CompradorService } from 'src/app/data/remote/comprador.remote';
import { Comprador } from 'src/app/domain/entities/clients.entity';

@Component({
  selector: 'app-login-comprador',
  templateUrl: './login-comprador.component.html',
  styleUrls: ['./login-comprador.component.css']
})
export class LoginCompradorComponent implements OnInit {
  comprador = new Comprador();
  msg='';

  constructor(private compradorService: CompradorService, private router:Router,private cookieService: CookieSesionService) { }

  ngOnInit(): void {
    var sesionCookie:string =this.cookieService.getCookieC();
    if(sesionCookie!=""){
      this.router.navigate([`Comprador-home`])
    }
  }

  login(){
    this.compradorService.loginComprador(this.comprador).subscribe(
      (res:any) => {
        console.log(res);
        var idShopper = res.body.idShopper;
        this.cookieService.setCookieC(idShopper);
        this.router.navigate([`Comprador-home`])
      },
      err => {
        console.log(err);
        this.msg="Credenciales incorrectas, porfavor ingrese correctamente sus datos";
      }
    )
  }

}
