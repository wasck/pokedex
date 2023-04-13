import { Route } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';

export const domainsPokedexRoutes: Route[] = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: 'pokemons', component: PokemonsComponent },
];
