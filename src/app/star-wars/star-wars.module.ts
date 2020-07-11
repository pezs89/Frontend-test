import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import * as fromStarWars from './reducers';
import { StarWarsPageEffects } from './effects/star-wars-page.effects';

import { StarWarsRoutingModule } from './star-wars-routing.module';
import { StarWarsPageComponent } from './containers/star-wars-page.component';
import { CharactersListComponent } from './components/characters-list.component';
import { CharacterCardComponent } from './components/character-card.component';
import { CharacterSearchComponent } from './components/character-search.component';

const CONTAINERS = [StarWarsPageComponent];
const COMPONENTS = [
  CharactersListComponent,
  CharacterCardComponent,
  CharacterSearchComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StarWarsRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
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
