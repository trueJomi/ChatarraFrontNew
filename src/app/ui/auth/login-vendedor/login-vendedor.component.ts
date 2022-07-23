import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieSesionService } from 'src/app/data/Local/cookie-sesion.local';
import { VendedorService } from 'src/app/data/remote/vendedor.remote';
import { Vendedor } from 'src/app/domain/entities/clients.entity';

@Component({
  selector: 'app-login-vendedor',
  templateUrl: './login-vendedor.component.html',
  styleUrls: ['./login-vendedor.component.css']
})
export class LoginVendedorComponent implements OnInit {

  vendedor = new Vendedor();
  msg='';

  constructor(
    private vendedorService: VendedorService,
    private router:Router,
    private cookieService: CookieSesionService) { }

  ngOnInit(): void {
    var sesionCookie:string =this.cookieService.getCookieV()
    if(sesionCookie!=""){
      this.router.navigate([`home`])
    }
  }

  login(){
    this.vendedorService.loginVendedor(this.vendedor).subscribe(
      (res:any) => {
        console.log(res);
        var idVendedor = res.body.idVendedor;
        this.cookieService.setCookieV(idVendedor);
        this.router.navigate([`home`])
      },
      err => {
        console.log(err);
        this.msg="Credenciales incorrectas, porfavor ingrese correctamente sus datos";
      }
    )
  }
}
