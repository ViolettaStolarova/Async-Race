const RANDOM_MAX = 256;

export function getGeneratedColor(): string {
  const r = Math.floor(Math.random() * RANDOM_MAX)
    .toString(16)
    .padStart(2, '0');
  const g = Math.floor(Math.random() * RANDOM_MAX)
    .toString(16)
    .padStart(2, '0');
  const b = Math.floor(Math.random() * RANDOM_MAX)
    .toString(16)
    .padStart(2, '0');
  return `#${r}${g}${b}`;
}
