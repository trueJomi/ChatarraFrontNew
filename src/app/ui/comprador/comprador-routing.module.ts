import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComponent } from './layout/historial/historial.component';
import { LayoutComponent } from './layout/layout.component';
import { ListarComponent } from './layout/listar/listar.component';
import { SubastaCComponent } from './subasta-c/subasta-c.component';

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
      
    ]
  },
  {
    path: 'subasta-c/:id',
    component: SubastaCComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompradorRoutingModule { }
