import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonGridViewComponent } from './pokemon-grid-view.component';



@Component({
  selector: 'pokedex-pokemons',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    PokemonGridViewComponent,
  ],
  template: `
    <pokedex-grid-view [pokemons]="(pokemons$ | async) || []"></pokedex-grid-view>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class PokemonsComponent {
  public readonly pokemons$: Observable<Array<unknown>> = this.pokemonService.pokemon$;

  public constructor(
    private readonly pokemonService: PokemonService
  ){}
}
