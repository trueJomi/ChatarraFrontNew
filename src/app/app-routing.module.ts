import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren:()=>
    import('./ui/vendedor/vendedor.module')
    .then((m)=>m.VendedorModule)
  },
  {
    path:'',
    loadChildren:()=>
    import('./ui/auth/auth.module')
    .then((m)=>m.AuthModule)
  },
  {
    path:'Comprador-home',
    loadChildren:()=>
    import('./ui/comprador/comprador.module')
    .then((m)=>m.CompradorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
