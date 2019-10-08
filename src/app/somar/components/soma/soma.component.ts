import { Component, OnInit } from '@angular/core';
import { SomaService } from '../../services';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css']
})
export class SomaComponent implements OnInit {

  constructor(private soma: SomaService) { }

  private  valor: number;
  private qtdLanches: number;
  private qtdBebidas: number;
  private qtdDoces: number;

  ngOnInit() {
    this.valor = 0;
    this.qtdLanches = 0;
    this.qtdBebidas = 0;
    this.qtdDoces = 0;
  }

  calculeComp(valorRecebido: number):number{
    return this.valor = this.soma.calcule(valorRecebido,this.valor)
  }

  quantidadeLanches(valorAtual: number): number{
    return this.qtdLanches = this.qtdLanches + 1;
  }
  quantidadeBebidas(valorAtual: number): number{
    return this.qtdBebidas = this.qtdBebidas + 1;
  }
  quantidadeDoces(valorAtual: number): number{
    return this.qtdDoces = this.qtdDoces + 1;
  }

  get getValor(){
    return this.valor;
  }

  get getQtdLanches(){
    return this.qtdLanches;
  }
  get getQtdBebidas(){
    return this.qtdBebidas;
  }
  get getQtdDoces(){
    return this.qtdDoces;
  }

}
