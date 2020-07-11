import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

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
          ),
          catchError((error: HttpErrorResponse) =>
            of(
              StarWarsApiActions.searchCharactersFailure({ msg: error.message })
            )
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
          ),
          catchError((error: HttpErrorResponse) =>
            of(
              StarWarsApiActions.searchCharactersFailure({ msg: error.message })
            )
          )
        )
      )
    )
  );

  apiErrors$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          StarWarsApiActions.searchCharactersFailure,
          StarWarsApiActions.loadCharactersFailure
        ),
        map(({ msg }) => {
          this.matSnackBar.open(msg, null, { duration: 3000 });
        })
      ),
    { dispatch: false }
  );

  constructor(
    private swapiService: SwapiService,
    private actions$: Actions,
    private matSnackBar: MatSnackBar
  ) {}
}
