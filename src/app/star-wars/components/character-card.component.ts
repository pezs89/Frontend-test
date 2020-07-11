import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { StarWarsCharacter } from '../models/star-wars-character';

@Component({
  selector: 'app-character-card',
  templateUrl: 'character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCardComponent {
  @Input() character: StarWarsCharacter;
  @Input() isOdd: boolean;
}
