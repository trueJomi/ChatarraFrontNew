import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieSesionService } from 'src/app/data/Local/cookie-sesion.local';
import { SubastaService } from 'src/app/data/remote/subasta.remote';
import { Subasta } from 'src/app/domain/entities/subasta.entity';

@Component({
  selector: 'app-listar-serca',
  templateUrl: './listar-serca.component.html',
  styleUrls: ['./listar-serca.component.css']
})
export class ListarSercaComponent implements OnInit {

  targets:Subasta[]=[]

  constructor(
    private cookieService:CookieSesionService,
    private router:Router,
    private subastaService:SubastaService,
  ) { }

  ngOnInit(): void {
    var sesionCookie:string=this.cookieService.getCookieC()
    if (sesionCookie==""){
      this.router.navigate([''])
    }

    this.subastaService.ListarSubastasSercanas(+sesionCookie).subscribe(
      (res)=>{
        this.targets=res.body
      }
    )
  }

}
