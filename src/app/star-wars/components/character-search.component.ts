import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-character-search',
  templateUrl: 'character-search.component.html',
  styleUrls: ['./character-search.component.scss'],
})
export class CharacterSearchComponent implements OnInit {
  @Input() searchQuery: string;
  @Output() searchValueChange = new EventEmitter<string>();

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchInput: [this.searchQuery],
    });
  }

  onSubmit() {
    const { searchQuery }: { searchQuery: string } = this.searchForm.value;
    this.searchValueChange.emit(searchQuery);
  }
}
