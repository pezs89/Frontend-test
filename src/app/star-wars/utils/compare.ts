import { SortOption } from '../models/sort-option';
import { SortKeys } from '../enums/sort-keys';
import { SortDirections } from '../enums/sort-directions';
import { SortGenders } from '../enums/sort-genders';

const compareByName = <T>(arr: T[], option: SortOption): T[] =>
  arr.sort((a, b) =>
    option.value === SortDirections.Asc
      ? a[option.sortKey].localeCompare(b[option.sortKey])
      : b[option.sortKey].localeCompare(a[option.sortKey])
  );

const compareByGender = <T>(arr: T[], option: SortOption): T[] => {
  const charactersWithNoGender = arr.filter(
    (item) => item[option.sortKey] === SortGenders.Na
  );
  const sortedArray = arr
    .filter((item) => item[option.sortKey] !== SortGenders.Na)
    .sort((a, b) => {
      if (option.value === SortGenders.Male) {
        return a[option.sortKey] > b[option.sortKey]
          ? -1
          : a[option.sortKey] < b[option.sortKey]
          ? 1
          : 0;
      } else {
        return a[option.sortKey] < b[option.sortKey]
          ? -1
          : a[option.sortKey] > b[option.sortKey]
          ? 1
          : 0;
      }
    });
  return [...sortedArray, ...charactersWithNoGender];
};

export const compare = <T>(arr: T[], selectedOption: SortOption): T[] => {
  switch (selectedOption.sortKey) {
    case SortKeys.Name:
      return compareByName(arr, selectedOption);
    default:
      return compareByGender(arr, selectedOption);
  }
};
