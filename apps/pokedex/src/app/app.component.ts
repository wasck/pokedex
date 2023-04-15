import { Component } from '@angular/core';
import { PokemonService } from 'libs/domains/pokedex/src/lib/application/services/pokemon.service';
import { Page } from 'libs/domains/pokedex/src/lib/domain/entities/page.model';
import { map } from 'rxjs';


@Component({
  selector: 'pokedex-root',
  template: `
    <mat-toolbar color="primary">
      <span>{{title}}</span>

      <span class="page-navigation">

        <button mat-icon-button (click)="onFirstPage()" *ngIf="(noPrevious$ | async) === false" matTooltip="Go to first page">
            <mat-icon>keyboard_double_arrow_left</mat-icon>
        </button>

        <button mat-icon-button (click)="onPrevious()" [disabled]="(noPrevious$ | async) || (isLoading$ | async)" matTooltip="Previous page">
            <mat-icon>chevron_left</mat-icon>
        </button>

        <button mat-icon-button (click)="onNext()" [disabled]="(isLoading$ | async)" matTooltip="Next page">
          <mat-icon>chevron_right</mat-icon>
        </button>
      </span>

      <span class="page-input">
      </span>
    </mat-toolbar>

    <mat-progress-bar mode="indeterminate" *ngIf="isLoading$ | async"></mat-progress-bar>

    <router-outlet></router-outlet>
  `,
  styles: [`
    mat-toolbar {
      display: flex;
      justify-content: space-between;
    },
    .page-input {
      display: flex;
      background-color: red;
      gap: 1rem;
    }
  `],
})
export class AppComponent {
  public readonly title = 'Pokedex'.toUpperCase();

  public readonly noPrevious$ = this.pokemonService.page.pipe(
    map((page: Page) => page.offset),
    map((offset: number) => offset === 0)
  );

  public readonly isLoading$ = this.pokemonService.isLoading$;

  public constructor(
    private readonly pokemonService: PokemonService
  ){}

  public onNext(): void {
    this.pokemonService.next();
  }
  
  public onPrevious(): void {
    this.pokemonService.previous();
  }

  public onFirstPage(): void {
    this.pokemonService.firstPage();
  }
}
