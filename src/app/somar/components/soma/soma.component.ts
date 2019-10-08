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

  ngOnInit() {
    this.valor = 0;
  }

  calculeComp(valorRecebido: number):number{
    return this.valor = this.soma.calcule(valorRecebido,this.valor)
  }

  get getValor(){
    return this.valor;
  }

}
