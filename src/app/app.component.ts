import { Component, VERSION } from '@angular/core';
import { fadeAnimation } from './animations/animation';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
