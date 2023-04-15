import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { DEFAULT_PATE, Page } from '../domain/entities/page.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataServiceService {
  private readonly URL = 'https://pokeapi.co/api/v2/';
  private readonly POKEMON_URL = this.URL + 'pokemon/';

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public fetch(page: Page = DEFAULT_PATE): Observable<unknown> {
    const params = new HttpParams()
      .set('offset', page.offset)
      .set('limit', page.limit);

    return this.httpClient
      .get<{ count: number, results: Array<{ name: string, url: string}>}>(
      this.POKEMON_URL, { params: params })
        .pipe(
          map((response) => ({count: response.count, results: response.results})),
          switchMap((response) => {
            return forkJoin(response.results.map((item) => {
              return this.httpClient.get(this.POKEMON_URL + item.name)
            }))
          }),
        )
  }
}
