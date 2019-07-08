import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ejercicio3-Angular';

  anadirNoticia(noticia) {
    console.log('ESTAMOS AÑADIENDO UNA NOTICIA', noticia);
  }
}
