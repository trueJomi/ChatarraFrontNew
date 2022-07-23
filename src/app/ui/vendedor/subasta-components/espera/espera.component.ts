import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieSesionService } from 'src/app/data/Local/cookie-sesion.local';
import { AccionesVendedorService } from 'src/app/data/Remote/acciones-vendedor.remote';
import { PropuestaService } from 'src/app/data/Remote/propuesta.remote';
import { SubastaService } from 'src/app/data/remote/subasta.remote';
import { Comprador } from 'src/app/domain/entities/clients.entity';
import { PropuestaExt } from 'src/app/domain/entities/subasta.entity';

@Component({
  selector: 'app-espera',
  templateUrl: './espera.component.html',
  styleUrls: ['./espera.component.css']
})
export class EsperaComponent implements OnInit {

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
      this.subastaService.GetSubasta(+idSubastaStr).subscribe(
        data=>{
          this.propuesta=data.body.seleccionado;
          this.comprador=data.body.seleccionado.comprador
        }
      )
    }
  }
  AnularAsignacion(){
    this.accionService.AsignacionAnulada(this.propuesta.subasta).subscribe(
      (res)=>{
        this.router.navigate([`/home/subasta/${res.body.idSubasta}`])
    })
  }
}
