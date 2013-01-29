objzip
======
objzip zips together keys and values into objects.
example: ``objzip(['a', 'b', 'c'], ['d', 'e', 'f'])`` -> ``{ a: 'd', b: 'e', c: 'f' }``

objzip(keys, values, obj)
-------------------------
For each ``(key, value)`` pair, assign ``value`` to ``obj[key]``.
``obj`` defaults to a fresh object with its prototype set to null whenever possible (``Object.create(null)`` or as close as possible)

objzip.sparse(keys, values, obj)
--------------------------------
Like objzip, but ignores ``(key, value)`` pairs where ``key`` or ``value`` equal ``null`` or ``undefined``.

objzip.sparseKeys(keys, values, obj)
------------------------------------
Like objzip, but ignores ``(key, value)`` pairs where ``key`` equals ``null`` or ``undefined``.

objzip.sparseValues(keys, values, obj)
------------------------------------
Like objzip, but ignores ``(key, value)`` pairs where ``value`` equals ``null`` or ``undefined``.
