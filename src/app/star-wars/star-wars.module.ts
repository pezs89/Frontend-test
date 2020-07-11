import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromStarWars from './reducers';
import { StarWarsPageEffects } from './effects/star-wars-page.effects';

import { StarWarsRoutingModule } from './star-wars-routing.module';
import { StarWarsPageComponent } from './containers/star-wars-page.component';
import { CharactersListComponent } from './components/characters-list.component';
import { CharacterCardComponent } from './components/character-card.component';

const CONTAINERS = [StarWarsPageComponent];
const COMPONENTS = [CharactersListComponent, CharacterCardComponent];

@NgModule({
  imports: [
    CommonModule,
    StarWarsRoutingModule,
    StoreModule.forFeature(
      fromStarWars.starWarsFeatureKey,
      fromStarWars.reducers
    ),
    EffectsModule.forFeature([StarWarsPageEffects]),
  ],
  exports: [],
  declarations: [CONTAINERS, COMPONENTS],
  providers: [],
})
export class StarWarsModule {}
