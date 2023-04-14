import { Route } from '@angular/router';
import { PokemonsComponent } from './application/features/pokemons/pokemons.component';

export const domainsPokedexRoutes: Route[] = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: 'pokemons', component: PokemonsComponent },
];
