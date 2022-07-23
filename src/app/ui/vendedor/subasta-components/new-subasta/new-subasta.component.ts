import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubastaServicePresenter } from 'src/app/adapters/Presenter/subasta.presenter';
import { CookieSesionService } from 'src/app/data/Local/cookie-sesion.local';
import { Chatarra, Subasta } from 'src/app/domain/entities/subasta.entity';

@Component({
  selector: 'app-new-subasta',
  templateUrl: './new-subasta.component.html',
  styleUrls: ['./new-subasta.component.css']
})
export class NewSubastaComponent implements OnInit {

  subasta:Subasta = new Subasta();
  idUser:number;

  constructor(
    private servicoSubastas:SubastaServicePresenter,
    private router:Router,
    private cookies:CookieSesionService
    ) { }

  ngOnInit(): void {
    if (this.cookies.isEmptyCookieV()){
      this.router.navigate([''])
    }
    this.idUser=+this.cookies.getCookieV();
  }

  CrearSubasta(chatarra:Chatarra){
    this.subasta.chatarra=chatarra
    this.subasta.vendedor=this.idUser
    this.servicoSubastas.crearSubasta(this.subasta).subscribe(
      data=>{
        this.router.navigate(['home/subasta',data.body.idSubasta]);
      }
    )
  }  

}
