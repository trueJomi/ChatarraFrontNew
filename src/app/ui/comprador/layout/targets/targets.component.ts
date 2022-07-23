import { Component, Input, OnInit } from '@angular/core';
import { CookieSesionService } from 'src/app/data/Local/cookie-sesion.local';
import { PropuestaService } from 'src/app/data/Remote/propuesta.remote';
import { PropuestaExt, Subasta, } from 'src/app/domain/entities/subasta.entity';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css']
})
export class TargetsComponent implements OnInit {

  @Input()
  target: Subasta;
  propuesta!: PropuestaExt;

  estados = [{
      nombre: "activo",
      class: "",
    },
    {
      nombre: "aceptado",
      class: "fa-solid fa-calendar-day",
    },
    {
      nombre: "recogiendo",
      class: "fa-solid fa-basket-shopping"
    },
    {
      nombre:"completado",
    },
    {
      nombre:"cancelado",
    }
  ];
  @Input()
  sesionCookie:number;
  
  notify:boolean=false;

  constructor(
    private propuestaService: PropuestaService,
    private cookieSesion:CookieSesionService,
    ) { }

  ngOnInit(): void {
    this.sesionCookie=+this.cookieSesion.getCookieC()

    if (this.target.seleccionado?.comprador.idShopper == this.sesionCookie) {
      this.notify = true
    }
    this.propuestaService.ObtenerMayor(this.target.idSubasta).subscribe(
      (res: any) => {
        if (res.body == null) {
        }
        else {
          var propuestatemp: PropuestaExt = new PropuestaExt();
          propuestatemp.idPropuesta = res.body.idPropuesta
          propuestatemp.price = res.body.price
          propuestatemp.subasta = this.target.idSubasta
          propuestatemp.time = res.body.time
          propuestatemp.comprador = res.body.comprador
          this.propuesta = propuestatemp
        }
      }
    )
  }

  icon_status(status: string) {
    for (var i in this.estados) {
      if (status == this.estados[i].nombre) {
        return this.estados[i].class;
      }
    }
    return null;
  }

  isMe(){
    if(this.target.status!='activo'){
      if(this.target.seleccionado.comprador.idShopper==this.sesionCookie){
          return false
      }
      else{
        return true
      }
    }else{
      return false
    }
  }
}
