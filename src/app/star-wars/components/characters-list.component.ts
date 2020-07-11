import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StarWarsCharacter } from '../models/star-wars-character';
import { fadeIn } from 'src/app/shared/animations/fade-in';

@Component({
  selector: 'app-characters-list',
  templateUrl: 'characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
  animations: [fadeIn],
})
export class CharactersListComponent {
  @Input() characters: StarWarsCharacter[];
  @Output() loadMoreCharacters = new EventEmitter();
}
