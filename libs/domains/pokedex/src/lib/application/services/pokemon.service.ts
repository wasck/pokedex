import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { DEFAULT_PATE, Page } from '../../domain/entities/page.model';
import { PokemonDataServiceService } from '../../infrastructure/pokemon-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly _pokemons: BehaviorSubject<Array<unknown>>;
  private readonly _page: BehaviorSubject<Page>;
  private readonly _isLoading: BehaviorSubject<boolean>;

  public get pokemon$(): Observable<Array<unknown>> {
    return this._pokemons.asObservable();
  }

  public get isLoading$(): Observable<boolean> {
    return this._isLoading.asObservable();
  }

  public get page(): Observable<Page>{
    return this._page.asObservable();
  }

  public constructor(
    private readonly pokemonDataservice: PokemonDataServiceService
  ) {
    this._pokemons = new BehaviorSubject<Array<any>>([]);
    this._page = new BehaviorSubject<Page>(DEFAULT_PATE);
    this._isLoading = new BehaviorSubject<boolean>(false);

    const pageAction = combineLatest([this.page]);

    pageAction.subscribe({
      next: () => {
        this.load();
      }
    })
  }

  public load(): void {
    this._isLoading.next(true);

    this.pokemonDataservice.fetch(this._page.value).subscribe({
      next: (result: any) => {
        this._pokemons.next(result);
      },
      complete: () => {
        this._isLoading.next(false)
      },
      error: () => {
        this._isLoading.next(false)
      }
    })
  }

  public size(size: number): void {
    this._page.next({
      ...this._page.value,
      limit: size
    })
  }

  public firstPage(): void {
    this._page.next({
      ...this._page.value,
      offset: 0
    })
  }

  public next(): void {
    this._page.next({
      ...this._page.value,
      offset: this._page.value.offset + this._page.value.limit
    })
  }
  
  public previous(): void {
    this._page.next({
      ...this._page.value,
      offset: this._page.value.offset > 0 ? this._page.value.offset - this._page.value.limit : 0
    })
  }
}
