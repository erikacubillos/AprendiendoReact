import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent{
  heroes: string[] = ['Thor','IronMan','Spiderman','Goku'];
  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
