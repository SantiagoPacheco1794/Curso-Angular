<<<<<<< HEAD
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})

export class HeroesModule {}
=======
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]

})
export class HeroesModule {}
>>>>>>> 365f35271f05492e7b7710b105b92e41a435c057
