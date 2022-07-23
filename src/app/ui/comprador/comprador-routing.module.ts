import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComponent } from './layout/historial/historial.component';
import { LayoutComponent } from './layout/layout.component';
import { ListarSercaComponent } from './layout/listar-serca/listar-serca.component';
import { ListarComponent } from './layout/listar/listar.component';
import { CompletarComponent } from './nuevo-c-components/completar/completar.component';
import { RecojoComponent } from './nuevo-c-components/recojo/recojo.component';
import { SubastaCComponent } from './nuevo-c-components/subasta-c/subasta-c.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListarComponent,
      },
      {
        path: 'historial',
        component: HistorialComponent,
      },
      {
        path:'listaSerca',
        component:ListarSercaComponent
      }
    ]
  },
  {
    path:'recojo/:id',
    component:RecojoComponent
  },
  {
    path: 'subasta-c/:id',
    component: SubastaCComponent,
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
export class CompradorRoutingModule { }
