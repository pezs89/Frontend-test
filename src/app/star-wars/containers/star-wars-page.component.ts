import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStarWars from '../reducers';
import { StarWarsPageActions } from '../actions';
import { StarWarsCharacter } from '../models/star-wars-character';

@Component({
  selector: 'app-star-wars-page',
  templateUrl: 'star-wars-page.component.html',
  styleUrls: ['./star-wars-page.component.scss'],
})
export class StarWarsPageComponent implements OnInit {
  characters$: Observable<StarWarsCharacter[]>;

  constructor(private store: Store<fromStarWars.State>) {}

  ngOnInit() {
    this.store.dispatch(StarWarsPageActions.pageInit());
    this.characters$ = this.store.pipe(
      select(fromStarWars.selectStarWarsCharacters)
    );
  }

  onNewSearchValue(query: string) {
    console.log(query);
  }
}
