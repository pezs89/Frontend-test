import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { SortOption } from '../models/sort-option';

@Component({
  selector: 'app-character-sort',
  templateUrl: 'character-sort.component.html',
  styleUrls: ['./character-sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterSortComponent {
  @Input() options: SortOption;
  @Output() selectedValueChange = new EventEmitter<SortOption>();

  onSelectionChange(selectedValue: MatSelect) {
    this.selectedValueChange.emit(selectedValue.value as SortOption);
  }
}
