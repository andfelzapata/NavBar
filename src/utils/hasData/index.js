const doesArrayHaveData = array => {
  if (!Array.isArray(array)) {
    return false
  }
  if (!array) return false

  return array.length > 0
}

const doesObjectHaveData = object => {
  if (object && typeof object !== "object" && object.constructor !== Object) {
    return false
  }

  if (!object) return false

  return Object.keys(object).length > 0
}

export { doesArrayHaveData, doesObjectHaveData }
