import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
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
}