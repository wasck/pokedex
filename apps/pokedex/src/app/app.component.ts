import { Component } from '@angular/core';

@Component({
  selector: 'pokedex-root',
  template: `
    <mat-toolbar color="primary">
      <span>{{title}}</span>
    </mat-toolbar>
  `,
  styles: [''],
})
export class AppComponent {
  public readonly title = 'Pokedex'.toUpperCase();
}
