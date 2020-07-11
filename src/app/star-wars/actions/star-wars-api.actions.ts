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
