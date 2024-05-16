// Importa el decorador 'Component' desde el módulo '@angular/core'
import { Component } from '@angular/core';

// El decorador @Component se usa para definir metadatos del componente, como el selector, la plantilla y los estilos.
@Component({
  // Define el selector del componente, que se utiliza para identificar el componente en la plantilla HTML.
  selector: 'app-root',
  // Define la ruta de acceso a la plantilla HTML asociada a este componente.
  templateUrl: './app.component.html',
  // Define la ruta de acceso al archivo CSS asociado a este componente.
  styleUrls: ['./app.component.css']
})
// Define la clase del componente AppComponent.
export class AppComponent {
  // Define una propiedad 'title' que almacena el título del componente.
  title = 'ProbandoAngular';
  // Define una propiedad 'mensaje' que almacena un mensaje adicional para el componente.
  mensaje = 'Video 4';
}
