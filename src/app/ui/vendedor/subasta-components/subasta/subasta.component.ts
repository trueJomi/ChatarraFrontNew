import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieSesionService } from 'src/app/data/Local/cookie-sesion.local';
import { AccionesVendedorService } from 'src/app/data/Remote/acciones-vendedor.remote';
import { PropuestaService } from 'src/app/data/Remote/propuesta.remote';
import { SubastaService } from 'src/app/data/remote/subasta.remote';
import { Comprador } from 'src/app/domain/entities/clients.entity';
import { Chatarra, Propuesta, PropuestaExt, Subasta } from 'src/app/domain/entities/subasta.entity';

@Component({
  selector: 'app-subasta',
  templateUrl: './subasta.component.html',
  styleUrls: ['./subasta.component.css']
})
export class SubastaComponent implements OnInit {

  subasta:Subasta=new Subasta();
  chatarra:Chatarra=new Chatarra();
  misPropuestas:Propuesta[]=[];
  mayor:PropuestaExt= new PropuestaExt();

  constructor(
    private subastaService:SubastaService,
    private cookieService:CookieSesionService,
    private link_router:ActivatedRoute,
    private accions:AccionesVendedorService,
    private propuestaSercice:PropuestaService,
    private router:Router,
    ) { 
          this.mayor.price=0
          var temp:Comprador=new Comprador()
          temp.name=""
          this.mayor.comprador=temp
    }

  ngOnInit(): void {
    if (this.cookieService.isEmptyCookieV()){
      this.router.navigate([''])
    }

    var idSubastaStr=this.link_router.snapshot.paramMap.get('id')
    if(idSubastaStr==null){
      this.router.navigate(['/home'])
    }
    else{
      var idSubasta:number=+idSubastaStr
      this.subastaService.GetSubasta(idSubasta).subscribe(
        (data)=>{
          this.subasta=data.body;
          this.misPropuestas=data.body.propuestas
          this.chatarra=data.body.chatarra
          if(this.subasta.status=='aceptado'){
            this.router.navigate(['/home/espera',this.subasta.idSubasta])
          }
        }
      )
      this.propuestaSercice.ObtenerMayor(idSubasta).subscribe(
        data=>{
            this.mayor=data.body
        },
      )
    }
  }

  isNull(){
    if (this.misPropuestas.length==0){
      return true
    }
    else{
      return false
    }
  }

  AsegniarPropuesta(){
    this.accions.AsignarPropuesta(this.subasta.idSubasta).subscribe(
      (data)=>{
        this.router.navigate(['/home/espera',data.body.idSubasta])
      }
    )
  }

}
