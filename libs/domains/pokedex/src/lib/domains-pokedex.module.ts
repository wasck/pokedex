import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { domainsPokedexRoutes as pokedexRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pokedexRoutes),
  ],
})
export class DomainsPokedexModule {}
