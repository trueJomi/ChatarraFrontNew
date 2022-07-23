import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieSesionService } from 'src/app/data/Local/cookie-sesion.local';
import { AccionesVendedorService } from 'src/app/data/Remote/acciones-vendedor.remote';
import { SubastaService } from 'src/app/data/remote/subasta.remote';
import { Comprador } from 'src/app/domain/entities/clients.entity';
import { PropuestaExt } from 'src/app/domain/entities/subasta.entity';

@Component({
  selector: 'app-completar',
  templateUrl: './completar.component.html',
  styleUrls: ['./completar.component.css']
})
export class CompletarComponent implements OnInit {

  idSubasta:number
  propuesta:PropuestaExt= new PropuestaExt();
  comprador:Comprador= new Comprador();

  constructor(
    private link_router:ActivatedRoute,
    private subastaService:SubastaService,
    private router:Router,
    private cookiesService:CookieSesionService,
    private accionService:AccionesVendedorService,
  ) { }

  ngOnInit(): void {
    if(this.cookiesService.isEmptyCookieV()){
      this.router.navigate([''])
    }
    var idSubastaStr=this.link_router.snapshot.paramMap.get('id')
    if(idSubastaStr==null){
      this.router.navigate(['/home'])
    }
    else{
      this.idSubasta=+idSubastaStr
      this.subastaService.GetSubasta(+idSubastaStr).subscribe(
        data=>{
          this.propuesta=data.body.seleccionado;
          this.comprador=data.body.seleccionado.comprador
        }
      )
    }
  }
  AceptarCompletar(){
    this.accionService.CompletarVendedor(this.idSubasta).subscribe(
      data=>{
          this.router.navigate(['/home'])
      }
    )
  }

}
