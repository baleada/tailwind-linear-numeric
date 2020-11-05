import test from 'ava'
import linearNumeric from '../src'
import resolveConfig from 'tailwindcss/resolveConfig'
import expectedKeys from './expectedKeys.fixture'

test('respects the "only" option as an array', t => {
  const theme = linearNumeric({ only: ['spacing'] }),
        keys = Object.keys(theme)

  t.assert(includesEvery({ array: keys, expected: expectedKeys.spacing }))
})

test('respects the "only" option as a string', t => {
  const theme = linearNumeric({ only: 'spacing' }),
        keys = Object.keys(theme)

  t.assert(includesEvery({ array: keys, expected: expectedKeys.spacing }))
})

test('respects the "increment" option', t => {
  const theme = linearNumeric({ increment: 42 }),
        keys = Object.keys(theme.spacing)

  t.assert(keys.includes('42'))
})

const incrementables = Object.keys(expectedKeys)
incrementables.forEach(incrementable => {
  test(`properly increments ${incrementable}`, t => {
    const defaultConfig = resolveConfig({ theme: linearNumeric() }),
          incrementableConfig = incrementable === 'colors' ? defaultConfig.theme.colors.blue : defaultConfig.theme[incrementable],
          keys = Object.keys(incrementableConfig)
  
    t.assert(includesEvery({ array: keys, expected: expectedKeys[incrementable] }))
  })
})

test('includes non-palette colors', t => {
  const defaultConfig = resolveConfig({ theme: linearNumeric() }),
        hues = Object.keys(defaultConfig.theme.colors),
        nonPaletteColors = ['black', 'white', 'transparent']

  t.assert(includesEvery({ array: hues, expected: nonPaletteColors }))
})

function includesEvery ({ array, expected }) {
  return expected.every(item => array.includes(item))
}
