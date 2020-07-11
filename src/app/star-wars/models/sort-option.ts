import { SortDirections } from '../enums/sort-directions';
import { SortGenders } from '../enums/sort-genders';

export interface SortOption {
  value: SortDirections | SortGenders;
  sortKey: string;
  viewValue: string;
}
