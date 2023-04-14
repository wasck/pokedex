import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Pokemon } from '../domain/entities/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataServiceService {
  private readonly URL = 'https://pokeapi.co/api/v2/';
  private readonly POKEMON_URL = this.URL + 'pokemon/';

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public fetch(offset = 0, limit = 5): Observable<{count: number, pokemon: Array<Pokemon>}> | any {
    const params = new HttpParams()
      .set('offset', offset)
      .set('limit', limit);

    return this.httpClient
      .get<{ count: number, results: Array<{ name: string, url: string}>}>(
      this.POKEMON_URL, { params: params })
        .pipe(
          map((response) => ({count: response.count, results: response.results})),
          tap(console.log)
        )
  }
}
