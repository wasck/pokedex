import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'pokedex-pokemons',
  standalone: true,
  imports: [CommonModule],
  template: `<p>pokemons works!</p>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class PokemonsComponent {}
