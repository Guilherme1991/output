import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {
  //Do pai para o filho!
  listaClientes = [
    {
      nome: 'Vitor',
      sobreNome: 'Borges'
    },
    {
      nome: 'Emerson',
      sobreNome: 'Daniel'
    },
    {
      nome: 'Thiago',
      sobreNome: 'Contre!'
    }
  ];
  constructor() {
  }

  ngOnInit(): void {
  }
  frase(event: string) {
     alert(event);
  }
}
