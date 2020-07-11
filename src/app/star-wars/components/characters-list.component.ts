import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { StarWarsCharacter } from '../models/star-wars-character';

@Component({
  selector: 'app-characters-list',
  templateUrl: 'characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersListComponent {
  @Input() characters: StarWarsCharacter[];
}
