<<<<<<< HEAD
import { Component } from "@angular/core";
=======
import { Component } from '@angular/core';
>>>>>>> 365f35271f05492e7b7710b105b92e41a435c057

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
<<<<<<< HEAD
export class HeroeComponent{
    public nombre:string = 'Ironman';
    public edad:number = 45;
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }
    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
        //La linea 11 es lo mismo que la linea 13
        //return this.nombre + ' - ' + this.edad;
    }

    cambiarNombre(): void {
        this.nombre = 'Spider-Man';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
=======
export class HeroeComponent{ 

    nombre: string = 'Ironman';
    edad  : number = 45

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        console.log('hey...');
        this.edad = 30;
    }

>>>>>>> 365f35271f05492e7b7710b105b92e41a435c057
}