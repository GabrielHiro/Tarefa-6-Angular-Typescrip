import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { HomeComponent } from './home/home.component';
import { TelaFilho1Component } from './tela-pai/tela-filho1/tela-filho1.component';
import { TelaFilho2Component } from './tela-pai/tela-filho2/tela-filho2.component';
@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CalcularMediaComponent,
    ApoliceSeguroComponent,
    MenuSuperiorComponent,
    PaginaNaoEncontradaComponent,
    TelaPaiComponent,
    HomeComponent,
    TelaFilho1Component,
    TelaFilho2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
