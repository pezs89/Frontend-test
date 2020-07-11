import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-character-search',
  templateUrl: 'character-search.component.html',
  styleUrls: ['./character-search.component.scss'],
})
export class CharacterSearchComponent implements OnInit {
  @Input() searchQuery: string;
  @Output() searchValueChange = new EventEmitter<string>();

  control: FormControl;

  ngOnInit() {
    this.control = new FormControl(this.searchQuery);
  }

  onSearchButtonClick() {
    this.searchValueChange.emit(this.control.value);
  }
}
