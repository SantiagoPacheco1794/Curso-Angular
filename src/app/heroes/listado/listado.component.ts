<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> 365f35271f05492e7b7710b105b92e41a435c057

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
<<<<<<< HEAD
export class ListadoComponent{
    heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Capitanga America"];
    heroeBorrado: string = "";
    borrarHeroe(){
      this.heroeBorrado = this.heroes.pop() || "";
    }
}
=======
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }


}

>>>>>>> 365f35271f05492e7b7710b105b92e41a435c057
