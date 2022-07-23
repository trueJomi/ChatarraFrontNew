import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComponent } from './layout/historial/historial.component';
import { LayoutComponent } from './layout/layout.component';
import { ListarComponent } from './layout/listar/listar.component';
import { CompletarComponent } from './subasta-components/completar/completar.component';
import { EditSubastaComponent } from './subasta-components/edit-subasta/edit-subasta.component';
import { EsperaComponent } from './subasta-components/espera/espera.component';
import { NewSubastaComponent } from './subasta-components/new-subasta/new-subasta.component';
import { SubastaComponent } from './subasta-components/subasta/subasta.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        component:ListarComponent
      },
      {
        path:'historial',
        component:HistorialComponent
      }
    ]
  },
  {
    path:'subasta/:id',
    component:SubastaComponent,
  },
  {
    path:'crearSubasta',
    component:NewSubastaComponent
  },
  {
    path:'subasta/:id',
    component:SubastaComponent,
  },
  {
    path:'editar-subasta/:ids',
    component:EditSubastaComponent
  },
  {
    path:'espera/:id',
    component:EsperaComponent,
  },
  {
    path:'completar/:id',
    component:CompletarComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedorRoutingModule { }
