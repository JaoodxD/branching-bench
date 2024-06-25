const labels = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four'
}

export default function objectCollection (value) {
  return labels[value] ?? 'default'
}
