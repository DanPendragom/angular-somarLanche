import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomaService {


  constructor() {}

  calcule(valorAtual: number, valorNovo: number): number{
    return valorAtual + valorNovo;
  }
  
}
