import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { StarWarsApiActions, StarWarsPageActions } from '../actions';
import { StarWarsCharacter } from '../models/star-wars-character';
import { SortOption } from '../models/sort-option';
import { SortDirections } from '../enums/sort-directions';
import { SortGenders } from '../enums/sort-genders';

export const starWarsPageFeatureKey = 'starWarsPage';

export interface State extends EntityState<StarWarsCharacter> {
  searchResultIds: string[];
  query: string;
  selectedSort: SortOption;
  sortOptions: SortOption[];
}

export const adapter: EntityAdapter<StarWarsCharacter> = createEntityAdapter<
  StarWarsCharacter
>({
  selectId: (character: StarWarsCharacter) => character.name,
});

export const initialState: State = adapter.getInitialState({
  searchResultIds: [],
  query: '',
  selectedSort: undefined,
  sortOptions: [
    { value: 'name', order: SortDirections.Asc, viewValue: 'A-Z' },
    { value: 'name', order: SortDirections.Desc, viewValue: 'Z-A' },
    { value: 'male', order: SortGenders.Male, viewValue: 'Male' },
    { value: 'female', order: SortGenders.Female, viewValue: 'Female' },
  ],
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
