import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieSesionService } from 'src/app/data/Local/cookie-sesion.local';
import { LocalizacionService } from 'src/app/data/remote/localizacion.remote';
import { VendedorService } from 'src/app/data/remote/vendedor.remote';
import { Vendedor } from 'src/app/domain/entities/clients.entity';
import { Departamento, Distrito, Provincia } from 'src/app/domain/entities/location.entity';

@Component({
  selector: 'app-register-vendedor',
  templateUrl: './register-vendedor.component.html',
  styleUrls: ['./register-vendedor.component.css']
})
export class RegisterVendedorComponent implements OnInit {

  persona:Vendedor=new Vendedor();
  list:Departamento[];
  miDepartamento:Departamento;
  miProvincia:Provincia;
  miDistrito:Distrito;

  constructor(
    private router:Router, 
    private service:VendedorService,
    private cookieService:CookieSesionService,
    private localizacion:LocalizacionService,
    ) { }

  ngOnInit() {
    this.localizacion.ObtenerLista().subscribe(
      (data:any)=>{
        this.list=data.body
      })
  }

  Guardar(){
    this.persona.departamento=this.miDepartamento.name;
    this.persona.provincia=this.miProvincia.name;
    this.persona.distrito=this.miDistrito.name;
    this.service.createVendedor(this.persona)
    .subscribe((data:any)=>{
      this.cookieService.setCookieV(data.body.idVendedor);
      this.router.navigate([`home`])
    })
    console.log(this.persona)
  }

}
