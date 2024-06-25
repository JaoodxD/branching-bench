const labels = ['one', 'two', 'three', 'four']

export default function arrayCollection (value) {
  return labels[value] ?? 'default'
}
