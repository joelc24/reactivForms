import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./pages/integrantes/new/new.module').then(m => m.NewModule) }, { path: 'list', loadChildren: () => import('./pages/integrantes/list/list.module').then(m => m.ListModule) }, { path: 'new', loadChildren: () => import('./pages/integrantes/new/new.module').then(m => m.NewModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
