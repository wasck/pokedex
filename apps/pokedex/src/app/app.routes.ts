import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@pokedex/domain')
      .then(m => m.DomainsPokedexModule)
  },
];
