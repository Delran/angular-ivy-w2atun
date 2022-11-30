import { Component, VERSION } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { fadeAnimation } from './animations/animation';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
