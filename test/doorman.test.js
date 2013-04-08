var doorman = require('..')
  , assert = require('assert')

describe('doorman', function () {

  describe('init', function () {

    it('should return a function', function () {
      var dedupe = doorman()
      assert.equal(typeof dedupe, 'function')
    })

    it('should load', function () {
      var dedupe = doorman({ '1': true })
      assert.equal(dedupe('1'), false)
      assert.ok(dedupe('2'))
    })
  })

  describe('allow()', function () {

    it('should return true with a new ID', function () {
      var dedupe = doorman()
      assert.ok(dedupe('1'))
    })

    it('should return false with a used ID', function () {
      var dedupe = doorman()
      assert.ok(dedupe('1'))
      assert.equal(dedupe('1'), false)
    })

    it('should convert integers to string', function () {
      var dedupe = doorman()
      assert.ok(dedupe('1'))
      assert.equal(dedupe('1'), false)
    })

  })

  describe('list()', function () {
    it('should return empty', function () {
      var dedupe = doorman()
      assert.deepEqual(dedupe.list(), {})
    })
    it('should return added ids', function () {
      var dedupe = doorman()
      dedupe('1')
      dedupe('1')
      dedupe('2')
      assert.deepEqual(dedupe.list(), { '1': true, '2': true })
    })
  })

  describe('has()', function () {

    it('should return false if an item has not yet been allowed', function () {
      var dedupe = doorman()
      assert.equal(dedupe.has('1'), false)
    })

    it('should return true if an item has been allowed', function () {
      var dedupe = doorman()
      dedupe('1')
      assert.equal(dedupe.has('1'), true)
    })

  })


})