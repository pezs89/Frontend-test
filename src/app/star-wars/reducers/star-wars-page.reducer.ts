import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { StarWarsApiActions } from '../actions';
import { StarWarsCharacter } from '../models/star-wars-character';

export const starWarsPageFeatureKey = 'starWarsPage';

export interface State extends EntityState<StarWarsCharacter> {}

export const adapter: EntityAdapter<StarWarsCharacter> = createEntityAdapter<
  StarWarsCharacter
>({
  selectId: (character: StarWarsCharacter) => character.name,
});

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer(
  initialState,
  on(StarWarsApiActions.loadCharactersSuccess, (state, action) =>
    adapter.setAll(action.characters, state)
  )
);
