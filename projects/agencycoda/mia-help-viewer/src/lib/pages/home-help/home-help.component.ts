import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-home-help',
  templateUrl: './home-help.component.html',
  styleUrls: ['./home-help.component.scss']
})
export class HomeHelpComponent implements OnInit {

  sections:any = [
    {
      title: 'Anuncios',
      image: '/assets/img/illustrations/001-anonymous.svg',
      description: 'Estamos al pendiente. Esto es lo que sabemos que no está funcionando como debería.',
      link: ''
    },
    {
      title: 'Interfaz de Codacoin',
      image: '/assets/img/illustrations/003-atom.svg',
      description: '¡¿QUÉ HACE ESTE BOTÓN?!',
      link: ''
    },
    {
      title: 'Sección 3',
      image: '/assets/img/illustrations/004-shopping bag.svg',
      description: 'Lorem ipsum dolor sit amet consectetur adropising',
      link: ''
    },
    {
      title: 'Sección 4',
      image: '/assets/img/illustrations/006-idea.svg',
      description: 'Lorem ipsum dolor sit amet consectetur adropising',
      link: ''
    },
    {
      title: 'Sección 5',
      image: '/assets/img/illustrations/006-idea.svg',
      description: 'Lorem ipsum dolor sit amet consectetur adropising',
      link: ''
    },
    {
      title: 'Sección 6',
      image: '/assets/img/illustrations/006-idea.svg',
      description: 'Lorem ipsum dolor sit amet consectetur adropising',
      link: ''
    },
    {
      title: 'Sección 7',
      image: '/assets/img/illustrations/006-idea.svg',
      description: 'Lorem ipsum dolor sit amet consectetur adropising',
      link: ''
    },
    {
      title: 'Sección 8',
      image: '/assets/img/illustrations/006-idea.svg',
      description: 'Lorem ipsum dolor sit amet consectetur adropising',
      link: ''
    },
    {
      title: 'Sección 9',
      image: '/assets/img/illustrations/006-idea.svg',
      description: 'Lorem ipsum dolor sit amet consectetur adropising',
      link: ''
    },
    {
      title: 'Sección 10',
      image: '/assets/img/illustrations/006-idea.svg',
      description: 'Lorem ipsum dolor sit amet consectetur adropising',
      link: ''
    },
    {
      title: 'Sección 11',
      image: '/assets/img/illustrations/006-idea.svg',
      description: 'Lorem ipsum dolor sit amet consectetur adropising',
      link: ''
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
