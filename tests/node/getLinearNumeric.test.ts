import { suite as createSuite } from 'uvu'
import * as assert from 'uvu/assert'
import { getLinearNumeric } from '../../src'
import expectedKeys from '../fixtures/expectedKeys'
import resolveConfig from 'tailwindcss/resolveConfig'
import { TailwindTheme } from 'tailwindcss/tailwind-config'

const suite = createSuite('function (node)')

suite(`respects the 'only' option as an array`, () => {
  const theme = getLinearNumeric({ only: ['spacing'] }),
        keys = Object.keys(theme.spacing)

  assert.ok(includesEvery({ array: keys, expected: expectedKeys.spacing }))
})

suite(`respects the 'only' option as a string and returns individual config`, () => {
  const theme = getLinearNumeric({ only: 'spacing' }),
        keys = Object.keys(theme)

  assert.ok(includesEvery({ array: keys, expected: expectedKeys.spacing }))
})

suite(`respects the 'increment' option`, () => {
  const theme = getLinearNumeric({ increment: 42 }),
        keys = Object.keys(theme.spacing)

  assert.ok(keys.includes('42'))
})

const incrementables = Object.keys(expectedKeys)
incrementables.forEach(incrementable => {
  suite(`properly increments ${incrementable}`, () => {
    const defaultConfig = resolveConfig({ darkMode: false, theme: getLinearNumeric() as TailwindTheme }),
          incrementableConfig = incrementable === 'colors' ? (defaultConfig.theme.colors as any).blue : defaultConfig.theme[incrementable],
          keys = Object.keys(incrementableConfig)
    
    assert.ok(includesEvery({ array: keys, expected: expectedKeys[incrementable] }))
  })
})

suite(`includes keyword colors`, () => {
  const defaultConfig = resolveConfig({ darkMode: false, theme: getLinearNumeric() as TailwindTheme }),
        hues = Object.keys(defaultConfig.theme.colors),
        keywordColors = ['black', 'white', 'transparent', 'current', 'inherit']

  assert.ok(includesEvery({ array: hues, expected: keywordColors }))
})

function includesEvery ({ array, expected }: { array: string[], expected: string[] }) {
  return expected.every(item => {
    // console.log({ item, includes: array.includes(item) })
    return array.includes(item)
  })
}

suite.run()
