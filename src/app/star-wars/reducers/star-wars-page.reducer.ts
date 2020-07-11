import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { StarWarsApiActions, StarWarsPageActions } from '../actions';
import { StarWarsCharacter } from '../models/star-wars-character';

export const starWarsPageFeatureKey = 'starWarsPage';

export interface State extends EntityState<StarWarsCharacter> {
  searchResultIds: string[];
  query: string;
}

export const adapter: EntityAdapter<StarWarsCharacter> = createEntityAdapter<
  StarWarsCharacter
>({
  selectId: (character: StarWarsCharacter) => character.name,
});

export const initialState: State = adapter.getInitialState({
  searchResultIds: [],
  query: '',
});

export const reducer = createReducer(
  initialState,
  on(StarWarsApiActions.loadCharactersSuccess, (state, action) =>
    adapter.setAll(action.characters, state)
  ),
  on(StarWarsPageActions.searchCharacters, (state, action) => ({
    ...state,
    query: action.query,
  })),
  on(StarWarsApiActions.searchCharactersSuccess, (state, action) => ({
    ...state,
    searchResultIds: action.characters.map((character) => character.name),
  }))
);
