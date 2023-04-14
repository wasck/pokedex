import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from '../../domain/entities/pokemon.model';
import { PokemonDataServiceService } from '../../infrastructure/pokemon-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly _pokemons: BehaviorSubject<Array<Pokemon>>;
  private readonly _knownPokemon: BehaviorSubject<number>;

  public get pokemon$(): Observable<Array<Pokemon>> {
    return this._pokemons.asObservable();
  }
  public get knownPokemon$(): Observable<number> {
    return this._knownPokemon.asObservable();
  }

  public constructor(
    private readonly pokemonDataservice: PokemonDataServiceService
  ) {
    this._pokemons = new BehaviorSubject<Array<Pokemon>>([]);
    this._knownPokemon = new BehaviorSubject<number>(0);
  }

  public load(): void {
    this.pokemonDataservice.fetch().subscribe({
      next: (result: any) => {
        this._knownPokemon.next(result.count);
        this._pokemons.next(result.results);
      }
    })
  }
}
