/*jshint eqnull:true*/
module.exports = objzip
function objzip(keys, values, obj) {
  if (obj == null) obj = makeObj()
  for (var i = 0, len = Math.min(keys.length, values.length); i < len; i++)
    obj[keys[i]] = values[i]
  return obj
}

objzip.sparse =
function objzipSparse(keys, values, obj) {
  return objzip( keys.filter(function(key, i) { return key != null && values[i] != null })
               , values.filter(function(value, i) { return value != null && keys[i] != null })
               , obj
               )
}

objzip.sparseValues =
function objzipSparseValues(keys, values, obj) {
  return objzip( keys.filter(function(_, i) { return values[i] != null })
               , values.filter(function(value, i) { return value != null })
               , obj
               )
}

objzip.sparseKeys =
function objzipSparseKeys(keys, values, obj) {
  return objzip( keys.filter(function(key) { return key != null })
               , values.filter(function(_, i) { return keys[i] != null })
               , obj
               )
}

var makeObj = function() {
  /*jshint proto:true */
  var obj = {}
  if (obj.__proto__) obj.__proto__ = null
  return obj
}
if (Object.create) makeObj = function() {
  return Object.create(null)
}
