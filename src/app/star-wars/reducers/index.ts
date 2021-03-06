import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action,
} from '@ngrx/store';
import * as fromStarWarsPage from './star-wars-page.reducer';
import * as fromRoot from '../../reducers';
import { compare } from '../utils/compare';

export const starWarsFeatureKey = 'starWars';

export interface StarWarsModuleState {
  [fromStarWarsPage.starWarsPageFeatureKey]: fromStarWarsPage.State;
}

export interface State extends fromRoot.State {
  [starWarsFeatureKey]: StarWarsModuleState;
}

export function reducers(
  state: StarWarsModuleState | undefined,
  action: Action
) {
  return combineReducers({
    [fromStarWarsPage.starWarsPageFeatureKey]: fromStarWarsPage.reducer,
  })(state, action);
}

export const selectStarWarsModuleState = createFeatureSelector<
  State,
  StarWarsModuleState
>(starWarsFeatureKey);

export const selectStarWarsEntitiesState = createSelector(
  selectStarWarsModuleState,
  (state) => state[fromStarWarsPage.starWarsPageFeatureKey]
);

export const selectSearchResultIds = createSelector(
  selectStarWarsEntitiesState,
  (state) => state.searchResultIds
);

export const selectSortOptions = createSelector(
  selectStarWarsEntitiesState,
  (state) => state.sortOptions
);

export const selectSelectedSortOption = createSelector(
  selectStarWarsEntitiesState,
  (state) => state.selectedSort
);

export const selectVisibleResultsCount = createSelector(
  selectStarWarsEntitiesState,
  (state) => state.visibleResults
);

export const selectStarWarsCharactersIsLoading = createSelector(
  selectStarWarsEntitiesState,
  (state) => state.loading
);

export const {
  selectAll: selectStarWarsCollection,
  selectTotal,
} = fromStarWarsPage.adapter.getSelectors(selectStarWarsEntitiesState);

export const selectSlicedState = createSelector(
  selectStarWarsCollection,
  selectVisibleResultsCount,
  (characters, count) => characters.slice(0, count)
);

export const selectSearchResults = createSelector(
  selectSlicedState,
  selectSearchResultIds,
  (characters, ids) =>
    ids.length
      ? ids
          .map((id) => characters.find((character) => character.name === id))
          .filter((item) => item !== undefined)
      : characters
);

export const selectCharactersAfterSorting = createSelector(
  selectSearchResults,
  selectSelectedSortOption,
  (characters, sortOption) =>
    sortOption ? compare(characters, sortOption) : characters
);
