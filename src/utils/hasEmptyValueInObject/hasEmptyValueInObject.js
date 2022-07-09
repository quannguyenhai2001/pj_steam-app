
export default function hasEmptyValueInObject(obj) {
  return Object.values(obj).some(value => value === '')
}