/*jshint eqnull:true*/
module.exports = objzip
function objzip(keys, values, obj) {
  if (obj == null) obj = {}
  for (var i = 0, len = Math.min(keys.length, values.length); i < len; i++)
    obj[keys[i]] = values[i]
  return obj
}

objzip.sparse =
function objzipSparse(keys, values, obj) {
  if (obj == null) obj = {}
  for (var i = 0, len = Math.min(keys.length, values.length); i < len; i++)
    if (keys[i] != null && values[i] != null)
      obj[keys[i]] = values[i]
  return obj
}

objzip.sparseValues =
function objzipSparseValues(keys, values, obj) {
  if (obj == null) obj = {}
  for (var i = 0, len = Math.min(keys.length, values.length); i < len; i++)
    if (values[i] != null)
      obj[keys[i]] = values[i]
  return obj
}

objzip.sparseKeys =
function objzipSparseKeys(keys, values, obj) {
  if (obj == null) obj = {}
  for (var i = 0, len = Math.min(keys.length, values.length); i < len; i++)
    if (keys[i] != null && values[i] != null)
      obj[keys[i]] = values[i]
  return obj
}
