import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public titulo: string = 'Contador APP';
  numero: number = 10;
  
  operacion( valor:number ) {
    this.numero += valor;  
  }
}

