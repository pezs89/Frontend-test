import { createAction, props } from '@ngrx/store';
import { SortOption } from '../models/sort-option';

export const pageInit = createAction('[Star Wars Page] Page Init');

export const searchCharacters = createAction(
  '[Star Wars Page] Search Characters',
  props<{ query: string }>()
);

export const sortCharacters = createAction(
  '[Star Wars Page] Sort Characters',
  props<{ option: SortOption }>()
);

export const loadMoreCharacters = createAction(
  '[Star Wars Page] Load More Characters'
);
