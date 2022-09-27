//primero se coloca las importaciones:
//propias del sistema
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';//formulario reactivos
//2. las importaciones de terceros

//2. las importaciones creadas
import { MainpageComponent } from './mainpage/mainpage.component';
import { PersonajesComponent } from './personajes/personajes.component';

@NgModule({
  declarations: [
    MainpageComponent,
    PersonajesComponent
  ],
  exports: [
    MainpageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ] 
})
export class DbzModule { }
