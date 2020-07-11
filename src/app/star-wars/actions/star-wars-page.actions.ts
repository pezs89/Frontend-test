import { createAction, props } from '@ngrx/store';

export const pageInit = createAction('[Star Wars Page] Page Init');

export const searchCharacters = createAction(
  '[Star Wars Page] Search Characters',
  props<{ query: string }>()
);
