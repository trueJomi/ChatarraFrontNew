import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieSesionService } from 'src/app/data/Local/cookie-sesion.local';
import { AccionesCompradorService } from 'src/app/data/Remote/acciones-comprador.remote';
import { SubastaService } from 'src/app/data/remote/subasta.remote';
import { PropuestaExt } from 'src/app/domain/entities/subasta.entity';

@Component({
  selector: 'app-completar',
  templateUrl: './completar.component.html',
  styleUrls: ['./completar.component.css']
})
export class CompletarComponent implements OnInit {

  idSubasta:number;

  propuesta:PropuestaExt= new PropuestaExt();

  constructor(
    private link_router:ActivatedRoute,
    private subastaService:SubastaService,
    private router:Router,
    private cookiesService:CookieSesionService,
    private accionService:AccionesCompradorService

  ) { }

  ngOnInit(): void {
    if(this.cookiesService.isEmptyCookieC()){
      this.router.navigate(['comprador'])
    }
    var idSubastaStr=this.link_router.snapshot.paramMap.get('id')
    if(idSubastaStr==null){
      this.router.navigate(['/Comprador-home'])
    }
    else{
      this.idSubasta=+idSubastaStr
      this.subastaService.GetSubasta(this.idSubasta).subscribe(
        data=>{
          this.propuesta=data.body.seleccionado;
        }
      )
    }
  }

  aceptarCompletar(){
    this.accionService.CompletarComprador(this.idSubasta).subscribe(
      data=>{
        this.router.navigate(['/Comprador-home'])
      }
    )
  }

}
