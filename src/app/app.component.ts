import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Doesnt work:</h1>
  <img src="startUrl">
  <h1>Works:</h1>
  <img [src]="startUrl">
  `,
  styles: []
})
export class AppComponent {
  title = 'ch10-ex200';
  startUrl ='https://developer.mozilla.org/samples/cssref/images/starsolid.gif';
}
