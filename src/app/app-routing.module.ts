import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HomeComponent } from './home/home.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { TelaFilho1Component } from './tela-pai/tela-filho1/tela-filho1.component';
import { TelaFilho2Component } from './tela-pai/tela-filho2/tela-filho2.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:"calculadora", component: CalculadoraComponent},
  {path:"calcular-media", component:CalcularMediaComponent},
  {path:"home", component: HomeComponent},
  {path:"apolice-seguro", component: ApoliceSeguroComponent},
  {path:"tela-pai", component: TelaPaiComponent,
    children:[ 
      {path: 'tela-filho1', component: TelaFilho1Component},
      {path: 'tela-filho2', component: TelaFilho2Component}
  ]},
  {path:'**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
