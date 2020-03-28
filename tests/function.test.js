import test  from 'ava'
import defaultConfig from './defaultConfig.stub'
import linearNumeric from '../src/tailwind'

test('returns the linear numeric config object', t => {
  const value = linearNumeric(),
        withoutMaxWidth = ({ maxWidth, ...rest }) => rest // Can't compare identities of anonymous functions, so gotta remove it

  t.deepEqual(withoutMaxWidth(value), defaultConfig)
})

test('respects the "only" option as an array', t => {
  const value = linearNumeric({ only: ['spacing'] }).spacing

  t.deepEqual(value, defaultConfig.spacing)
})

test('respects the "only" option as a string', t => {
  const value = linearNumeric({ only: 'spacing' })

  t.deepEqual(value, defaultConfig.spacing)
})

test('respects the "increment" option', t => {
  const value = linearNumeric({ increment: 42 }),
        suffixes = Object.keys(value.spacing)

  t.assert(suffixes.includes('42'))
})
