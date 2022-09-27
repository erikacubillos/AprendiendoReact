import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
})
export class MainpageComponent {  

  personajes:Personaje[] = [
    {
      nombre: 'Goku',
      poder: 100000
    },
    {
      nombre: 'Krilin',
      poder: 100
    },
    {
      nombre: 'vegueta',
      poder: 5000
    }
  ]
  //metodos
  nuevo: Personaje= {
    nombre: '',
    poder: 0
  }
  agregar(){
    //validación por si no hay
    if(this.nuevo.nombre.trim().length === 0){ return; }
    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre:"",
      poder:0
    };
  }
}
