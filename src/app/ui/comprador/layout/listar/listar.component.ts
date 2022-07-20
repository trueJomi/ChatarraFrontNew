import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SubastaService } from 'src/app/data/remote/subasta.remote';
import { Chatarra, Subasta } from 'src/app/domain/entities/subasta.entity';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  targets:Subasta[]=[]

  constructor(
    private subastaService:SubastaService,
    private router:Router,
    private cookieService:CookieService,
    ) { }

  ngOnInit(): void {
    // var sesionCookie:string=this.cookieService.get('sesion')
    var sesionCookie:string="1"
    if (sesionCookie==""){
      this.router.navigate([''])
    }

    this.subastaService.ListarCercanasComprador(+sesionCookie).subscribe(
      (res:any)=>{
        for(var i in res.body){
          var subasta:Subasta=new Subasta();
          var chatarra:Chatarra= new Chatarra();

          subasta.idSubasta=res.body[i].idSubasta;
          subasta.fecha=res.body[i].fecha;
          subasta.status=res.body[i].status;
          subasta.fechaRecojo=res.body[i].fechaRecojo;
          subasta.seleccionado=res.body[i].seleccionado;

          
          chatarra.idChatarra= res.body[i].chatarra.idChatarra;
          chatarra.titulo= res.body[i].chatarra.titulo;
          chatarra.description= res.body[i].chatarra.description;
          chatarra.precioBase= res.body[i].chatarra.precioBase;
          subasta.propuestas=res.body[i].propuestas;
          subasta.chatarra=chatarra;
          this.targets.push(subasta)
        }   
      }
    )

  }
}
