import { suite as createSuite } from 'uvu'
import * as assert from 'uvu/assert'
import { linearNumeric } from '../../src/index.js'
import expectedKeys from '../fixtures/expectedKeys.js'
import resolveConfig from 'tailwindcss/resolveConfig.js'
import colors from 'tailwindcss/colors.js'

const suite = createSuite('function (node)')

suite('respects the "only" option as an array', context => {
  const theme = linearNumeric({ only: ['spacing'] }),
        keys = Object.keys(theme)

  assert.ok(includesEvery({ array: keys, expected: expectedKeys.spacing }))
})

suite('respects the "only" option as a string', context => {
  const theme = linearNumeric({ only: 'spacing' }),
        keys = Object.keys(theme)

  assert.ok(includesEvery({ array: keys, expected: expectedKeys.spacing }))
})

suite('respects the "increment" option', context => {
  const theme = linearNumeric({ increment: 42 }),
        keys = Object.keys(theme.spacing)

  assert.ok(keys.includes('42'))
})

const incrementables = Object.keys(expectedKeys)
incrementables.forEach(incrementable => {
  suite(`properly increments ${incrementable}`, context => {
    const defaultConfig = resolveConfig({ theme: linearNumeric() }),
          incrementableConfig = incrementable === 'colors' ? defaultConfig.theme.colors.blue : defaultConfig.theme[incrementable],
          keys = Object.keys(incrementableConfig)
  
    assert.ok(includesEvery({ array: keys, expected: expectedKeys[incrementable] }))
  })
})

suite('includes non-palette colors', context => {
  const defaultConfig = resolveConfig({ theme: linearNumeric() }),
        hues = Object.keys(defaultConfig.theme.colors),
        nonPaletteColors = ['black', 'white', 'transparent', 'current']

  assert.ok(includesEvery({ array: hues, expected: nonPaletteColors }))
})

function includesEvery ({ array, expected }) {
  return expected.every(item => {
    // console.log({ item, includes: array.includes(item) })
    return array.includes(item)
  })
}

suite.run()
