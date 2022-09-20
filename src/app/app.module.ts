<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
>>>>>>> 365f35271f05492e7b7710b105b92e41a435c057


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
<<<<<<< HEAD
    ContadorModule
=======
    ContadorModule,
    DbzModule
>>>>>>> 365f35271f05492e7b7710b105b92e41a435c057
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
