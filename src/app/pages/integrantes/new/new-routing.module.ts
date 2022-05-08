import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from 'src/app/shared/components/formulario/formulario.component';
import { NewComponent } from './new.component';

const routes: Routes = [{ path: '', component: NewComponent }, { path: ':id', component: FormularioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRoutingModule { }
