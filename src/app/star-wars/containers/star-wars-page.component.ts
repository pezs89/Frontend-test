import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStarWars from '../reducers';
import { StarWarsPageActions } from '../actions';
import { StarWarsCharacter } from '../models/star-wars-character';
import { SortOption } from '../models/sort-option';

@Component({
  selector: 'app-star-wars-page',
  templateUrl: 'star-wars-page.component.html',
  styleUrls: ['./star-wars-page.component.scss'],
})
export class StarWarsPageComponent implements OnInit {
  characters$: Observable<StarWarsCharacter[]>;
  sortOptions$: Observable<SortOption[]>;

  constructor(private store: Store<fromStarWars.State>) {}

  ngOnInit() {
    this.store.dispatch(StarWarsPageActions.pageInit());
    this.characters$ = this.store.pipe(
      select(fromStarWars.selectSearchResults)
    );
    this.sortOptions$ = this.store.pipe(select(fromStarWars.selectSortOptions));
  }

  onNewSearchValue(query: string) {
    this.store.dispatch(StarWarsPageActions.searchCharacters({ query }));
  }

  onNewSortValue(newSortValue: SortOption) {
    console.log(newSortValue);
  }
}
