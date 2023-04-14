import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable } from 'rxjs';
import { Pokemon } from '../../../domain/entities/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonGridViewComponent } from './pokemon-grid-view.component';

@Component({
  selector: 'pokedex-pokemons',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, PokemonGridViewComponent],
  template: `
    <mat-toolbar>Known Pokemon: {{knownPokemon$ | async}} </mat-toolbar>
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
export class PokemonsComponent implements OnInit {
  public readonly pokemons$: Observable<Array<Pokemon>> = this.pokemonService.pokemon$;
  public readonly knownPokemon$: Observable<number> = this.pokemonService.knownPokemon$;

  public constructor(
    private readonly pokemonService: PokemonService
  ){}
  
  public ngOnInit(): void {
    this.pokemonService.load();
  }
}
