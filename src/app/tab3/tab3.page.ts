import { Component } from '@angular/core';
import { IDev } from '../types/devType';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  public devs : Array<IDev> = [
    {
      name: 'Lucas Sousa da Silva',
      role: 'Desenvolvedor Fullstack',
      role_description: 'Trabalhei no desenvolvimento tanto do front-end quando do back-end, utilizando as tecnologias do Firebase Authentification, API e desenvolvimento de serviços para o front-end.',
      picture: '../assets/dev-pictures/lucas.png'
    },
    {
      name: 'Matheus Almeida Oliveira',
      role: 'Desenvolvedor Front-end',
      role_description: 'Eu trabalhei no desenvolvimento do template da página de login e registro, utilizando as tecnologias SCSS e HTML para desenvolve-las.',
      picture: '../assets/dev-pictures/matheus1.jpg'
    },
    {
      name: 'Matheus Louback Miranda',
      role: 'Desenvolvedor Front-end',
      role_description: 'Eu trabalhei no desenvolvimento no template da mercado de notícias, utilizando as tecnologias SCSS e HTML para desenvolver.',
      picture: '../assets/dev-pictures/matheus2.jpg'
    },
    {
      name: 'Lucas Paulino Moreira',
      role: 'Desenvolvedor Front-end',
      role_description: 'Eu trabalhei no desenvolvimento no template da página de . Eu utilizei SCSS e HTML para desenvolver as páginas de troca de senha e a dos desenvolvedores.',
      picture: '../assets/dev-pictures/paulino.jpg'
    }
  ]

}
