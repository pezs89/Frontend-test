import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action,
} from '@ngrx/store';
import * as fromStarWarsPage from './star-wars-page.reducer';
import * as fromRoot from '../../reducers';

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

export const {
  selectAll: selectStarWarsCollection,
} = fromStarWarsPage.adapter.getSelectors(selectStarWarsEntitiesState);

export const selectStarWarsCharacters = createSelector(
  selectStarWarsCollection,
  (entities) => entities
);
