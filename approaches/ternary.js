export default function ternary (value) {
  return value === 1
    ? 'one'
    : value === 2
      ? 'two'
      : value === 3
        ? 'three'
        : value === 4
          ? 'four'
          : value === 5
            ? 'five'
            : 'default'
}
