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
export class CharacterSearchComponent implements OnInit, OnDestroy {
  @Input() searchQuery: string;
  @Output() searchValueChange = new EventEmitter<string>();

  control: FormControl;
  private destroy$ = new Subject();

  ngOnInit() {
    this.control = new FormControl(this.searchQuery);
    this.control.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((newQuery) => {
        this.searchValueChange.emit(newQuery);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
