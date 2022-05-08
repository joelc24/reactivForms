import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './shared/components/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioModule } from './shared/components/formulario/formulario.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormularioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
