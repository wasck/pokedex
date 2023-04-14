import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Pokemon } from '../../../domain/entities/pokemon.model';


@Component({
  selector: 'pokedex-grid-view',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <ng-template #noPokemon>
      <div class="no-items-banner">
        No Pokemon available
      </div>
    </ng-template>
    
    <div class="pokemon-grid-container" *ngIf="pokemons.length; else noPokemon">
      <mat-card *ngFor="let pokemon of pokemons">
        <mat-card-header>
          <mat-card-title>
            {{pokemon.name}}
          </mat-card-title>
        </mat-card-header>
        <img [src]="pokemon.img" [alt]="pokemon.name">
        <mat-card-content>
          content
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .no-items-banner {
        background-color: lightblue;
        padding: 1rem;
      }
      .pokemon-grid-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 1rem;
        gap: .5reM;
      }
      mat-card {
        max-width: 250px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonGridViewComponent {

  @Input() public pokemons: Array<Pokemon> = [];
}
