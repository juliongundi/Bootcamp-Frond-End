import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-noticias',
  templateUrl: './form-noticias.component.html',
  styleUrls: ['./form-noticias.component.sass']
})
export class FormNoticiasComponent implements OnInit {

  @Output() escucharCreacionNuevaNoticia: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  crearNoticia() {

    const title = (<HTMLInputElement> document.getElementById('title'));
    console.log(title.value);   

    const body = (<HTMLTextAreaElement> document.getElementById('body'));
    console.log(body.value);

    const noticia = {
      title: title.value,
      body: body.value
    };
    this.escucharCreacionNuevaNoticia.emit(noticia);
  }

}
