export default function arrayCollectionFixed (value) {
  return value < 4 && value >= 0
    ? ['one', 'two', 'three', 'four'][value]
    : 'default'
}
