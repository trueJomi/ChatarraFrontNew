import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieSesionService } from 'src/app/data/Local/cookie-sesion.local';
import { CompradorService } from 'src/app/data/remote/comprador.remote';
import { LocalizacionService} from 'src/app/data/remote/localizacion.remote';
import { Comprador } from 'src/app/domain/entities/clients.entity';
import { Departamento, Distrito, Provincia } from 'src/app/domain/entities/location.entity';

@Component({
  selector: 'app-register-comprador',
  templateUrl: './register-comprador.component.html',
  styleUrls: ['./register-comprador.component.css']
})
export class RegisterCompradorComponent implements OnInit {
  msg='';
  persona:Comprador=new Comprador();
  list:Departamento[];
  miDepartamento:Departamento;
  miProvincia:Provincia;
  miDistrito:Distrito;

  constructor(
    private router:Router, 
    private service:CompradorService,
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
    this.service.createComprador(this.persona)
    .subscribe((data:any)=>{
      this.cookieService.setCookieC(data.body.idShopper);
      this.router.navigate([`Comprador-home`])
    })
    console.log(this.persona)
  }

}
