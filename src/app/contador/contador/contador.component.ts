import { Component } from '@angular/core';

@Component({
<<<<<<< HEAD
  selector: 'app-contador',
  template:`
            <h1>{{titulo}}</h1>
            <h3>La base es: <strong> {{ base }} </strong></h3>
            <button (click)="acumular(+base)">+{{ base }} </button>
            <span> {{ numero }} </span>
            <button (click)="acumular(-base)">-{{ base }} </button>
            `
})
export class ContadorComponent {
  public titulo: string = 'Contador App';
  public numero:number = 10;
  public base:number = 5;

  public acumular(valor:number){
    this.numero += valor;
  }
=======
    selector: 'app-contador',
    template: `
            
        <h1> {{ titulo }} </h1>
        <h3>La base es: <strong> {{ base }} </strong></h3>

        <button (click)="acumular( base )"> + {{ base }}</button>

        <span> {{ numero }} </span>

        <button (click)="acumular( -base )"> - {{ base }} </button>
    
    `
})
export class ContadorComponent {

    titulo: string = 'Contador App';
    numero: number = 10;
    base  : number = 5;

    acumular( valor: number ) {
        this.numero += valor;
    }

>>>>>>> 365f35271f05492e7b7710b105b92e41a435c057
}