const test = require('ava'),
      defaultConfig = require('./defaultConfig.stub'),
      tailwindLinear = require('../index.js')

test('returns the linear numeric config object', t => {
  const value = tailwindLinear()

  t.deepEqual(value, defaultConfig)
})

test('respects the "only" option', t => {
  const value = tailwindLinear({ only: ['spacing'] }).spacing

  t.deepEqual(value, defaultConfig.spacing)
})

test('respects the "increment" option', t => {
  const value = tailwindLinear({ increment: 1 }),
        suffixes = Object.keys(value.spacing)

  t.assert(suffixes.includes('4'))
})
