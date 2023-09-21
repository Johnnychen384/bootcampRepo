const add = require('../jesse_unit_testing/add')

const assert = require('assert')


describe('add()', () => {
    it('should return 2 when passed integer values of 1 and 1 as params 1 & 2', () => {
        assert.equal(add(1,1), 2)
    })
    it('should return 2 when passed string values of 1 and 1 as params 1 & 2', () => {
        assert.equal(add('1','1'), 2)
    })
})

