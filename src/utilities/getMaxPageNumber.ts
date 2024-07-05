export function getMaxPageNumber(itemsAmount: number, countOfItemsPerPage: number): number {
  const maxPageNumber = Math.ceil(itemsAmount / countOfItemsPerPage);

  return maxPageNumber;
}
