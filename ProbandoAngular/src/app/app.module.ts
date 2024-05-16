import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';

// El decorador @NgModule se utiliza para definir un módulo de Angular.
@NgModule({
  // En la sección 'declarations', se enumeran todos los componentes, directivas y tuberías que pertenecen a este módulo.
  // Aquí se declaran los componentes que serán utilizados en las plantillas de este módulo.
  declarations: [
    AppComponent, // Declara el componente AppComponent para que pueda ser utilizado en las plantillas de este módulo.
    EmpleadosComponent, EmpleadoComponent // Declara el componente EmpleadosComponent para que pueda ser utilizado en las plantillas de este módulo.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
