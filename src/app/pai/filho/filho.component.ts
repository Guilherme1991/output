import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {
  @Input() clientes: any;

  //Do filho para o pai!
  frase: string = 'Nova frase para ser emitida!';
  @Output() fraseNova: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    
  }
  novaFrase() {
    this.fraseNova.emit(this.frase);
  }
}
