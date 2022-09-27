//primero se coloca las importaciones:
//propias del sistema
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//2. las importaciones de terceros

//2. las importaciones de creadas
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [
    MainpageComponent
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
