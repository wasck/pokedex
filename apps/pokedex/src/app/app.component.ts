import { Component } from '@angular/core';

@Component({
  selector: 'pokedex-root',
  template: `
    <mat-toolbar color="primary">
      <span>{{title}}</span>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [''],
})
export class AppComponent {
  public readonly title = 'Pokedex'.toUpperCase();
}
