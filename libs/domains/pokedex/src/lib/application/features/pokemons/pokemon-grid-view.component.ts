import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


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
            Name: {{pokemon.name | uppercase}}
          </mat-card-title>
        </mat-card-header>
        <img [src]="pokemon.sprites.other.dream_world.front_default" [alt]="pokemon.name">
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
        gap: 2reM;
      }
      img {
        height: 100%;
        object-fit: fill;
        background-color: #b2ad7f;
      }
      mat-card {
        min-width: 250px;
        max-width: 250px;

        box-shadow: 5px 3px 20px -3px rgba(0,0,0,0.38);
        -webkit-box-shadow: 5px 3px 20px -3px rgba(0,0,0,0.38);
        -moz-box-shadow: 5px 3px 20px -3px rgba(0,0,0,0.38);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonGridViewComponent {

  @Input() public pokemons: Array<any> = [];
}
