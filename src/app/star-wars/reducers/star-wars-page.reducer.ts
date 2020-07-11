import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { StarWarsApiActions, StarWarsPageActions } from '../actions';
import { StarWarsCharacter } from '../models/star-wars-character';
import { SortOption } from '../models/sort-option';
import { SortDirections } from '../enums/sort-directions';
import { SortGenders } from '../enums/sort-genders';
import { SortKeys } from '../enums/sort-keys';

export const starWarsPageFeatureKey = 'starWarsPage';

export interface State extends EntityState<StarWarsCharacter> {
  searchResultIds: string[];
  query: string;
  selectedSort: SortOption;
  sortOptions: SortOption[];
  visibleResults: number;
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
  visibleResults: 4,
  sortOptions: [
    {
      value: SortDirections.Asc,
      viewValue: 'A-Z',
      sortKey: SortKeys.Name,
    },
    {
      value: SortDirections.Desc,
      viewValue: 'Z-A',
      sortKey: SortKeys.Name,
    },
    {
      value: SortGenders.Male,
      viewValue: 'Male',
      sortKey: SortKeys.Gender,
    },
    {
      value: SortGenders.Female,
      viewValue: 'Female',
      sortKey: SortKeys.Gender,
    },
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
  })),
  on(StarWarsPageActions.loadMoreCharacters, (state) => ({
    ...state,
    visibleResults: state.visibleResults + 4,
  })),
  on(StarWarsPageActions.sortCharacters, (state, action) => ({
    ...state,
    selectedSort: action.option,
  }))
);
