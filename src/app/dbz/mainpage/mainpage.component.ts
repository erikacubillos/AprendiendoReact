import { Component, OnInit } from '@angular/core';


interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
})
export class MainpageComponent {
  
   
  //metodos
  nuevo: Personaje= {
    nombre: '',
    poder: 0
  }
  agregar(){
    if( this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo);
  }

}
