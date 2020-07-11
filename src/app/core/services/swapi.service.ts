import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { StarWarsCharacter } from 'src/app/star-wars/models/star-wars-character';

@Injectable({ providedIn: 'root' })
export class SwapiService {
  constructor(private http: HttpClient) {}

  getStarWarsCharactersList(): Observable<{ results: StarWarsCharacter[] }> {
    return this.http.get<{ results: StarWarsCharacter[] }>(environment.apiUrl);
  }

  searchForStarWarsCharacters(
    query: string
  ): Observable<{ results: StarWarsCharacter[] }> {
    return this.http.get<{ results: StarWarsCharacter[] }>(
      `${environment.apiUrl}?search=${query}`
    );
  }
}
