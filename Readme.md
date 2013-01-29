[![Build Status](https://travis-ci.org/nathan7/objzip.png)](https://travis-ci.org/nathan7/objzip)

[![browser support](http://ci.testling.com/nathan7/objzip.png)](http://ci.testling.com/nathan7/objzip)

objzip
======
objzip zips together keys and values into objects.
example: ``objzip(['a', 'b', 'c'], ['d', 'e', 'f'])`` -> ``{ a: 'd', b: 'e', c: 'f' }``

objzip(keys, values, obj)
-------------------------
For each ``(key, value)`` pair, assign ``value`` to ``obj[key]``.
``obj`` defaults to a fresh object.

objzip.sparse(keys, values, obj)
--------------------------------
Like objzip, but ignores ``(key, value)`` pairs where ``key`` or ``value`` equal ``null`` or ``undefined``.

objzip.sparseKeys(keys, values, obj)
------------------------------------
Like objzip, but ignores ``(key, value)`` pairs where ``key`` equals ``null`` or ``undefined``.

objzip.sparseValues(keys, values, obj)
------------------------------------
Like objzip, but ignores ``(key, value)`` pairs where ``value`` equals ``null`` or ``undefined``.
