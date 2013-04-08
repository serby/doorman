// Ensure that only one id is allowed in
module.exports = function (load) {

  var ids = load || {}

  // Ensure an object is loaded
  if ((typeof ids !== 'object') || (Array.isArray(ids))) {
    throw new Error('Must provide an object')
  }

  function allow(id) {
    if (ids[id]) {
      return false
    } else {
      ids[id] = true
      return true
    }
  }

  function list() {
    return ids
  }

  function has(id) {
    return !!ids[id]
  }

  allow.list = list
  allow.has = has

  return allow
}