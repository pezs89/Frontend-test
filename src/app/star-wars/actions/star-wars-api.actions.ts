import { createAction, props } from '@ngrx/store';
import { StarWarsCharacter } from '../models/star-wars-character';

export const loadCharactersSuccess = createAction(
  '[Star Wars Characters/API] GET Characters Success',
  props<{ characters: StarWarsCharacter[] }>()
);

export const loadCharactersFailure = createAction(
  '[Star Wars Characters/API] GET Characters Failure',
  props<{ msg: string }>()
);

export const searchCharactersSuccess = createAction(
  '[Star Wars Characters/API] Search Characters Success',
  props<{ characters: StarWarsCharacter[] }>()
);

export const searchCharactersFailure = createAction(
  '[Star Wars Characters/API] Searcj Characters Failure',
  props<{ msg: string }>()
);
