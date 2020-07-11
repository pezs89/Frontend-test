import { SortDirections } from '../enums/sort-directions';
import { SortGenders } from '../enums/sort-genders';

export interface SortOption {
  value: string;
  order: SortDirections | SortGenders;
  viewValue: string;
}
