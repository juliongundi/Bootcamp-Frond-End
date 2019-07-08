import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  public paises =["España", "Italia", "Holanda"];
  title = 'prueba-input';

  public responderClick(fecha: Date){
    alert("Alguien ha pulsado un boton" + fecha);
  }
}
