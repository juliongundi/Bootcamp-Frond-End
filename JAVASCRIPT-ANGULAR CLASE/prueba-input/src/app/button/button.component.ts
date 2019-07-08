import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
  
})
export class ButtonComponent {

  @Input() tituloDelBoton: string = "SIN TITULO";
  @Output() usuarioHaClicado: EventEmitter<Date> = new EventEmitter();
  constructor() { }

  public responderClick(){
    //alert("Pulsado botón " + this.tituloDelBoton);
    let fechaDeClick =new Date();
    this.usuarioHaClicado.next(fechaDeClick);
  }
}
