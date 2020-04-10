import test  from 'ava'
import linearNumeric from '../src'
import resolveConfig from 'tailwindcss/resolveConfig'
import expectedKeys from './expectedKeys.stub.js'

test('respects the "only" option as an array', t => {
  const theme = linearNumeric({ only: ['spacing'] }),
        keys = Object.keys(theme),
        expected = ['spacing']

  t.deepEqual(keys, expected)
})

test('respects the "only" option as a string', t => {
  const theme = linearNumeric({ only: 'spacing' }),
        keys = Object.keys(theme)

  t.deepEqual(keys, expectedKeys.spacing)
})

test('respects the "increment" option', t => {
  const theme = linearNumeric({ increment: 42 }),
        keys = Object.keys(theme.spacing)

  t.assert(keys.includes('42'))
})

const incrementables = Object.keys(expectedKeys)
incrementables.forEach(incrementable => {
  test(`properly increments ${incrementable}`, t => {
    const defaultTheme = resolveConfig({ theme: linearNumeric() }),
          theme = incrementable === 'colors' ? defaultTheme.theme.colors.blue : defaultTheme.theme[incrementable],
          keys = Object.keys(theme)
  
    t.deepEqual(keys, expectedKeys[incrementable])
  })
})
