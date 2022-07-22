import { Injectable } from '@angular/core';
import { SubastaService } from 'src/app/data/remote/subasta.remote';
import { Subasta } from 'src/app/domain/entities/subasta.entity';

@Injectable({
  providedIn: 'root'
})
export class SubastaServicePresenter {

  constructor(
    private subastaService:SubastaService
    ) {}

  crearSubasta(subasta:Subasta){
    this.subastaService.CrearSubasta(subasta).subscribe(
      (data)=>{
        return data.body;
      }
    )
  }

  EditarSubasta(subasta:Subasta){
    this.subastaService.EditarSuvasta(subasta).subscribe(
      (data)=>{
        return data.body;
      }
    )
  }

}
