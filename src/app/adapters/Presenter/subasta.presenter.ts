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
    return this.subastaService.CrearSubasta(subasta)
  }

  EditarSubasta(subasta:Subasta){
    return this.subastaService.EditarSubasta(subasta)
  }

  GetSubasta(id:number){
    return this.subastaService.GetSubasta(id)
  }

}
