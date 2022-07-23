import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieSesionService } from 'src/app/data/Local/cookie-sesion.local';
import { SubastaService } from 'src/app/data/remote/subasta.remote';
// import { DataRouteService } from 'src/app/data/Local/data-route.local';
import { Chatarra, Subasta } from 'src/app/domain/entities/subasta.entity';

@Component({
  selector: 'app-edit-subasta',
  templateUrl: './edit-subasta.component.html',
  styleUrls: ['./edit-subasta.component.css']
})
export class EditSubastaComponent implements OnInit {

  chatarra:Chatarra= new Chatarra();

  idSubasta:number

  constructor(
    private servicoSubastas:SubastaService,
    private router:Router,
    private link_router:ActivatedRoute,
    private cookies:CookieSesionService,
  ) { }

  ngOnInit(): void {
    if (this.cookies.isEmptyCookieV()){
      this.router.navigate([''])
    }
    var subastaId=this.link_router.snapshot.paramMap.get("ids")
    if(subastaId==null){
        this.router.navigate(['home'])
    }
    else{
      this.idSubasta=+subastaId;
    }

    this.servicoSubastas.GetSubasta(this.idSubasta).subscribe(
      (data)=>{
        this.chatarra=data.body.chatarra;
      }
    )

  }

  EditarSubasta(chatarra:Chatarra){
    var editSubasta:Subasta= new Subasta()
    editSubasta.chatarra=chatarra
    this.servicoSubastas.EditarSubasta(editSubasta).subscribe(
      data=>{
        this.router.navigate(['home/subasta',data.body.idSubasta]);
      }
    )
  }  

}
