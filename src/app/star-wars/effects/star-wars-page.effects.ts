import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import { StarWarsPageActions, StarWarsApiActions } from '../actions';
import { SwapiService } from 'src/app/core/services/swapi.service';

@Injectable()
export class StarWarsPageEffects {
  pageInit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StarWarsPageActions.pageInit),
      mergeMap(() =>
        this.swapiService.getStarWarsCharactersList().pipe(
          map((response) =>
            StarWarsApiActions.loadCharactersSuccess({
              characters: response.results,
            })
          )
        )
      )
    )
  );

  searchCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StarWarsPageActions.searchCharacters),
      mergeMap(({ query }) =>
        this.swapiService.searchForStarWarsCharacters(query).pipe(
          map((response) =>
            StarWarsApiActions.searchCharactersSuccess({
              characters: response.results,
            })
          )
        )
      )
    )
  );

  constructor(private swapiService: SwapiService, private actions$: Actions) {}
}
