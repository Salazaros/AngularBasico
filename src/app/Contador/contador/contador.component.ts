import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
    <h1> {{ titulo }}  </h1>
    <h3> La base es: <strong>{{ bases }}</strong></h3>

    <button (click)= "acumular( + bases )"> + {{ bases }} </button>

    <span>{{ numero }} </span>

    <button (click)="acumular( - bases )"> - {{ bases }} </button>

    `
        
    
})

export class contadorComponent{
    titulo: string = 'Contador App';
    numero: number = 10;
    bases: number = 5;
    
    acumular( valor: number){
    this.numero += valor;
    }
}