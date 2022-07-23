import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieSesionService } from 'src/app/data/Local/cookie-sesion.local';
import { PropuestaService } from 'src/app/data/Remote/propuesta.remote';
import { SubastaService } from 'src/app/data/remote/subasta.remote';
import { Comprador } from 'src/app/domain/entities/clients.entity';
import { Chatarra, Propuesta, PropuestaExt, Subasta } from 'src/app/domain/entities/subasta.entity';

@Component({
  selector: 'app-subasta-c',
  templateUrl: './subasta-c.component.html',
  styleUrls: ['./subasta-c.component.css']
})
export class SubastaCComponent implements OnInit {

  propuesta = new Propuesta();
  idSubasta: number;
  subasta: Subasta = new Subasta();
  chatarra: Chatarra = new Chatarra();
  misPropuestas: Propuesta[] = [];
  mayor:PropuestaExt= new PropuestaExt();

  constructor(
    private propuestaservice:PropuestaService,
    private activeRoute: ActivatedRoute,
    private subastaService:SubastaService,
    private cookiesService:CookieSesionService,
    private router:Router,
  ) {
    this.activeRoute.paramMap.subscribe(paramMap => {
      this.idSubasta = Number(paramMap.get('id'));
    })
    this.mayor.price=0
    var temp:Comprador=new Comprador()
    temp.name=""
    this.mayor.comprador=temp
  }

  ngOnInit(): void {
    if(this.cookiesService.isEmptyCookieC()){
      this.router.navigate(['comprador'])
    }

    this.subastaService.GetSubasta(this.idSubasta).subscribe(
      (data)=>{
        this.subasta=data.body;
        this.misPropuestas=data.body.propuestas;
        this.chatarra= data.body.chatarra;
        if(this.subasta.status=='aceptado'){
          this.router.navigate(['/Comprador-home/recojo',this.subasta.idSubasta])
        }
        if(this.subasta.status=='recogiendo'){
          this.router.navigate(['/Comprador-home/completar',this.subasta.idSubasta])
        }
      }
    )
    this.propuestaservice.ObtenerMayor(this.idSubasta).subscribe(
      data=>{
          this.mayor=data.body
      },
    )
  }
  createPropuesta(propuesta:any) {
    var sesionCookie: string = this.cookiesService.getCookieC()
    propuesta.subasta = this.idSubasta;
    propuesta.comprador = +sesionCookie;
    this.propuestaservice.CrearPropuesta(propuesta).subscribe(
      (res) => {
        window.location.reload();
      }
    )

  }
  isNull(){
    if (this.misPropuestas.length==0){
      return true
    }
    else{
      return false
    }
  }
  RetirarseDeSubasta() {
    var sesionCookie: string = this.cookiesService.getCookieC();

    if (this.subasta.status == "activo") {
      this.propuestaservice.RetirarseDeSubasta(this.idSubasta,+sesionCookie).subscribe(
        () => {
          console.log("Se retiro de la Subasta")
          this.router.navigate(['/Comprador-home']);
        }
      )
    }
    else{
      console.log("No se puede retirar de la subasta porque su estado no es activo")
    }

  }
}
