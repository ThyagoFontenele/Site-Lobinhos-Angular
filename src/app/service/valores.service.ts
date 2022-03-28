import { Injectable } from '@angular/core';

import { Valores } from '../Valores';


@Injectable({
  providedIn: 'root'
})
export class ValoresService {

  valores: Valores[] = [
    {
      img_url: 'protecao',
      title: 'Proteção',
      description: 'Assim mesmo, o desenvolvimento contínuo de distintas formas de atuação facilita a criação do sistema de participação geral.'
    },
    {
      img_url: 'carinho',
      title: 'Carinho',
      description: 'Assim mesmo, o desenvolvimento contínuo de distintas formas de atuação facilita a criação do sistema de participação geral.'
    },
    {
      img_url: 'companheirismo',
      title: 'Companheirismo',
      description: 'Assim mesmo, o desenvolvimento contínuo de distintas formas de atuação facilita a criação do sistema de participação geral.'
    },
    {
      img_url: 'resgate',
      title: 'Resgate',
      description: 'Assim mesmo, o desenvolvimento contínuo de distintas formas de atuação facilita a criação do sistema de participação geral.'
    },
  ];
  getAll(){
    return this.valores;
  }
  
  constructor() { }
}
