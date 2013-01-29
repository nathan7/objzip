var expect = require('chai').expect
  , objzip = require('./index')

describe('objzip', function() {
  it('should zip keys and values together', function() {
    expect(objzip( ['a', 'b', 'c']
                 , ['d', 'e', 'f']
                 )
    ).to.deep.equal({ a: 'd', b: 'e', c: 'f' })
  })

  it('should include sparse keys', function() {
    var obj = { a: 'd', c: 'f' }
    obj[null] = 'e'
    expect(objzip( ['a', null, 'c']
                 , ['d', 'e' , 'f']
                 )
    ).to.deep.equal(obj)
  })

  it('should include sparse values', function() {
    expect(objzip( ['a', 'b' , 'c']
                 , ['d', null, 'f']
                 )
    ).to.deep.equal({ a: 'd', b: null, c: 'f' })
  })

  it('should include sparse (key, value)s', function() {
    var obj = { a: 'd', c: 'f' }
    obj[null] = null
    expect(objzip( ['a', null, 'c']
                 , ['d', null, 'f']
                 )
    ).to.deep.equal(obj)
  })

  it('should set the object prototype to null', function() {
    expect(Object.getPrototypeOf(objzip( ['a', 'b', 'c']
                                       , ['d', 'e', 'f']
                                       ))
    ).to.equal(null)
  })
})

describe('objzip.sparse', function() {
  it('should exclude sparse keys', function() {
    expect(objzip.sparse( ['a', null, 'c']
                        , ['d', 'e' , 'f']
                        )
    ).to.deep.equal({ a: 'd', c: 'f' })
  })

  it('should exclude sparse values', function() {
    expect(objzip.sparse( ['a', 'b' , 'c']
                        , ['d', null, 'f']
                        )
    ).to.deep.equal({ a: 'd', c: 'f' })
  })

  it('should exclude sparse (key, value)s', function() {
    expect(objzip.sparse( ['a', null, 'c']
                        , ['d', null, 'f']
                        )
    ).to.deep.equal({ a: 'd', c: 'f' })
  })
})

describe('objzip.sparseKeys', function() {
  it('should exclude sparse keys', function() {
    expect(objzip.sparse( ['a', null, 'c']
                        , ['d', 'e' , 'f']
                        )
    ).to.deep.equal({ a: 'd', c: 'f' })
  })

  it('should include sparse values', function() {
    expect(objzip( ['a', 'b' , 'c']
                 , ['d', null, 'f']
                 )
    ).to.deep.equal({ a: 'd', b: null, c: 'f' })
  })

  it('should exclude sparse (key, value)s', function() {
    expect(objzip.sparse( ['a', null, 'c']
                        , ['d', null, 'f']
                        )
    ).to.deep.equal({ a: 'd', c: 'f' })
  })
})

describe('objzip.sparseValues', function() {
  it('should include sparse keys', function() {
    var obj = { a: 'd', c: 'f' }
    obj[null] = 'e'
    expect(objzip( ['a', null, 'c']
                 , ['d', 'e' , 'f']
                 )
    ).to.deep.equal(obj)
  })

  it('should exclude sparse values', function() {
    expect(objzip.sparse( ['a', 'b' , 'c']
                        , ['d', null, 'f']
                        )
    ).to.deep.equal({ a: 'd', c: 'f' })
  })

  it('should exclude sparse (key, value)s', function() {
    expect(objzip.sparse( ['a', null, 'c']
                        , ['d', null, 'f']
                        )
    ).to.deep.equal({ a: 'd', c: 'f' })
  })
})
