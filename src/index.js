import defaultConfig from 'tailwindcss/defaultConfig'
import resolveConfig from 'tailwindcss/resolveConfig'
import { rem, px, screen, withoutColorPalettes } from '@baleada/tailwind-theme-utils'

const resolvedDefaultTheme = resolveConfig({
  ...defaultConfig,
  experimental: {
    // All set to false, likely won't handle until 2.0 releases.
    // Spacing changes are dramatic.
    extendedSpacingScale: false,
    extendedFontSizeScale: false,
  }
}).theme

export default function linearNumeric (options = {}) {
  const { increment = 1, only = incrementable } = options,
        colors = getColors(increment),
        linearNumeric = {
          colors,
          spacing: {
            ...px({
              [increment * 1]: getResolvedDefaultThemeValue('spacing', 'px'),
            }),
            [increment * 0]: getResolvedDefaultThemeValue('spacing', '0'),
            [increment * 1]: getResolvedDefaultThemeValue('spacing', '1'),
            [increment * 2]: getResolvedDefaultThemeValue('spacing', '2'),
            [increment * 3]: getResolvedDefaultThemeValue('spacing', '3'),
            [increment * 4]: getResolvedDefaultThemeValue('spacing', '4'),
            [increment * 5]: getResolvedDefaultThemeValue('spacing', '5'),
            [increment * 6]: getResolvedDefaultThemeValue('spacing', '6'),
            [increment * 7]: getResolvedDefaultThemeValue('spacing', '8'),
            [increment * 8]: getResolvedDefaultThemeValue('spacing', '10'),
            [increment * 9]: getResolvedDefaultThemeValue('spacing', '12'),
            [increment * 10]: getResolvedDefaultThemeValue('spacing', '16'),
            [increment * 11]: getResolvedDefaultThemeValue('spacing', '20'),
            [increment * 12]: getResolvedDefaultThemeValue('spacing', '24'),
            [increment * 13]: getResolvedDefaultThemeValue('spacing', '32'),
            [increment * 14]: getResolvedDefaultThemeValue('spacing', '40'),
            [increment * 15]: getResolvedDefaultThemeValue('spacing', '48'),
            [increment * 16]: getResolvedDefaultThemeValue('spacing', '56'),
            [increment * 17]: getResolvedDefaultThemeValue('spacing', '64'),
          },
          borderRadius: {
            [increment * 0]: getResolvedDefaultThemeValue('borderRadius', 'none'),
            [increment * 3]: getResolvedDefaultThemeValue('borderRadius', 'sm'),
            [increment * 4]: getResolvedDefaultThemeValue('borderRadius', 'default'),
            [increment * 5]: getResolvedDefaultThemeValue('borderRadius', 'md'),
            [increment * 6]: getResolvedDefaultThemeValue('borderRadius', 'lg'),
            full: getResolvedDefaultThemeValue('borderRadius', 'full'),
          },
          borderWidth: {
            [increment * 0]: getResolvedDefaultThemeValue('borderWidth', '0'),
            [increment * 4]: getResolvedDefaultThemeValue('borderWidth', 'default'),
            [increment * 5]: getResolvedDefaultThemeValue('borderWidth', '2'),
            [increment * 6]: getResolvedDefaultThemeValue('borderWidth', '4'),
            [increment * 7]: getResolvedDefaultThemeValue('borderWidth', '8'),
          },
          boxShadow: {
            [increment * 0]: getResolvedDefaultThemeValue('boxShadow', 'none'),
            [increment * 2]: getResolvedDefaultThemeValue('boxShadow', 'xs'),
            [increment * 3]: getResolvedDefaultThemeValue('boxShadow', 'sm'),
            [increment * 4]: getResolvedDefaultThemeValue('boxShadow', 'default'),
            [increment * 5]: getResolvedDefaultThemeValue('boxShadow', 'md'),
            [increment * 6]: getResolvedDefaultThemeValue('boxShadow', 'lg'),
            [increment * 7]: getResolvedDefaultThemeValue('boxShadow', 'xl'),
            [increment * 8]: getResolvedDefaultThemeValue('boxShadow', '2xl'),
            [`-${increment * 4}`]: getResolvedDefaultThemeValue('boxShadow', 'inner'),
            outline: getResolvedDefaultThemeValue('boxShadow', 'outline'),
          },
          flexGrow: {
            [increment * 0]: getResolvedDefaultThemeValue('flexGrow', '0'),
            [increment * 4]: getResolvedDefaultThemeValue('flexGrow', 'default'),
          },
          flexShrink: {
            [increment * 0]: getResolvedDefaultThemeValue('flexShrink', '0'),
            [increment * 4]: getResolvedDefaultThemeValue('flexShrink', 'default'),
          },
          fontSize: {
            [increment * 2]: getResolvedDefaultThemeValue('fontSize', 'xs'),
            [increment * 3]: getResolvedDefaultThemeValue('fontSize', 'sm'),
            [increment * 4]: getResolvedDefaultThemeValue('fontSize', 'base'),
            [increment * 5]: getResolvedDefaultThemeValue('fontSize', 'lg'),
            [increment * 6]: getResolvedDefaultThemeValue('fontSize', 'xl'),
            [increment * 7]: getResolvedDefaultThemeValue('fontSize', '2xl'),
            [increment * 8]: getResolvedDefaultThemeValue('fontSize', '3xl'),
            [increment * 9]: getResolvedDefaultThemeValue('fontSize', '4xl'),
            [increment * 10]: getResolvedDefaultThemeValue('fontSize', '5xl'),
            [increment * 11]: getResolvedDefaultThemeValue('fontSize', '6xl'),
            // [increment * 12]: getResolvedDefaultThemeValue('fontSize', '7xl'),
            // [increment * 13]: getResolvedDefaultThemeValue('fontSize', '8xl'),
            // [increment * 14]: getResolvedDefaultThemeValue('fontSize', '9xl'),
          },
          fontWeight: {
            [increment * 1]: getResolvedDefaultThemeValue('fontWeight', 'thin'),
            [increment * 2]: getResolvedDefaultThemeValue('fontWeight', 'extralight'),
            [increment * 3]: getResolvedDefaultThemeValue('fontWeight', 'light'),
            [increment * 4]: getResolvedDefaultThemeValue('fontWeight', 'normal'),
            [increment * 5]: getResolvedDefaultThemeValue('fontWeight', 'medium'),
            [increment * 6]: getResolvedDefaultThemeValue('fontWeight', 'semibold'),
            [increment * 7]: getResolvedDefaultThemeValue('fontWeight', 'bold'),
            [increment * 8]: getResolvedDefaultThemeValue('fontWeight', 'extrabold'),
            [increment * 9]: getResolvedDefaultThemeValue('fontWeight', 'black'),
          },
          letterSpacing: {
            [`-${increment * 2}`]: getResolvedDefaultThemeValue('letterSpacing', 'tighter'),
            [`-${increment * 1}`]: getResolvedDefaultThemeValue('letterSpacing', 'tight'),
            [increment * 0]: getResolvedDefaultThemeValue('letterSpacing', 'normal'),
            [increment * 1]: getResolvedDefaultThemeValue('letterSpacing', 'wide'),
            [increment * 2]: getResolvedDefaultThemeValue('letterSpacing', 'wider'),
            [increment * 3]: getResolvedDefaultThemeValue('letterSpacing', 'widest'),
          },
          lineHeight: {
            [increment * 0]: getResolvedDefaultThemeValue('lineHeight', 'none'),
            [increment * 2]: getResolvedDefaultThemeValue('lineHeight', 'tight'),
            [increment * 3]: getResolvedDefaultThemeValue('lineHeight', 'snug'),
            [increment * 4]: getResolvedDefaultThemeValue('lineHeight', 'normal'),
            [increment * 5]: getResolvedDefaultThemeValue('lineHeight', 'relaxed'),
            [increment * 6]: getResolvedDefaultThemeValue('lineHeight', 'loose'),
            ...rem({
              [increment * 3]: getResolvedDefaultThemeValue('lineHeight', '3'),
              [increment * 4]: getResolvedDefaultThemeValue('lineHeight', '4'),
              [increment * 5]: getResolvedDefaultThemeValue('lineHeight', '5'),
              [increment * 6]: getResolvedDefaultThemeValue('lineHeight', '6'),
              [increment * 7]: getResolvedDefaultThemeValue('lineHeight', '7'),
              [increment * 8]: getResolvedDefaultThemeValue('lineHeight', '8'),
              [increment * 9]: getResolvedDefaultThemeValue('lineHeight', '9'),
              [increment * 10]: getResolvedDefaultThemeValue('lineHeight', '10'),
            })
          },
          maxHeight: {
            full: getResolvedDefaultThemeValue('maxHeight', 'full'),
            screen: getResolvedDefaultThemeValue('maxHeight', 'screen'),
          },
          maxWidth: {
            [increment * 0]: getResolvedDefaultThemeValue('maxWidth', 'none'),
            [increment * 1]: getResolvedDefaultThemeValue('maxWidth', 'xs'),
            [increment * 2]: getResolvedDefaultThemeValue('maxWidth', 'sm'),
            [increment * 3]: getResolvedDefaultThemeValue('maxWidth', 'md'),
            [increment * 4]: getResolvedDefaultThemeValue('maxWidth', 'lg'),
            [increment * 5]: getResolvedDefaultThemeValue('maxWidth', 'xl'),
            [increment * 6]: getResolvedDefaultThemeValue('maxWidth', '2xl'),
            [increment * 7]: getResolvedDefaultThemeValue('maxWidth', '3xl'),
            [increment * 8]: getResolvedDefaultThemeValue('maxWidth', '4xl'),
            [increment * 9]: getResolvedDefaultThemeValue('maxWidth', '5xl'),
            [increment * 10]: getResolvedDefaultThemeValue('maxWidth', '6xl'),
            full: getResolvedDefaultThemeValue('maxWidth', 'full'),
            ...screen(resolvedDefaultTheme.screens),
          },
          minHeight: {
            [increment * 0]: getResolvedDefaultThemeValue('minHeight', '0'),
            full: getResolvedDefaultThemeValue('minHeight', 'full'),
            screen: getResolvedDefaultThemeValue('minHeight', 'screen'),
          },
          minWidth: {
            [increment * 0]: getResolvedDefaultThemeValue('minWidth', '0'),
            full: getResolvedDefaultThemeValue('minWidth', 'full'),
          },
          strokeWidth: {
            [increment * 0]: getResolvedDefaultThemeValue('strokeWidth', '0'),
            [increment * 1]: getResolvedDefaultThemeValue('strokeWidth', '1'),
            [increment * 2]: getResolvedDefaultThemeValue('strokeWidth', '2'),
          },
          transitionDuration: {
            [increment * 1]: getResolvedDefaultThemeValue('transitionDuration', '75'),
            [increment * 2]: getResolvedDefaultThemeValue('transitionDuration', '100'),
            [increment * 3]: getResolvedDefaultThemeValue('transitionDuration', '150'),
            [increment * 4]: getResolvedDefaultThemeValue('transitionDuration', '200'),
            [increment * 5]: getResolvedDefaultThemeValue('transitionDuration', '300'),
            [increment * 6]: getResolvedDefaultThemeValue('transitionDuration', '500'),
            [increment * 7]: getResolvedDefaultThemeValue('transitionDuration', '700'),
            [increment * 8]: getResolvedDefaultThemeValue('transitionDuration', '1000'),
          },
          transitionDelay: {
            [increment * 1]: getResolvedDefaultThemeValue('transitionDelay', '75'),
            [increment * 2]: getResolvedDefaultThemeValue('transitionDelay', '100'),
            [increment * 3]: getResolvedDefaultThemeValue('transitionDelay', '150'),
            [increment * 4]: getResolvedDefaultThemeValue('transitionDelay', '200'),
            [increment * 5]: getResolvedDefaultThemeValue('transitionDelay', '300'),
            [increment * 6]: getResolvedDefaultThemeValue('transitionDelay', '500'),
            [increment * 7]: getResolvedDefaultThemeValue('transitionDelay', '700'),
            [increment * 8]: getResolvedDefaultThemeValue('transitionDelay', '1000'),
          },
        }
  
  return typeof only === 'string'
    ? linearNumeric[only]
    : only.reduce(
      (theme, property) => ({ ...theme, [property]: linearNumeric[property] }),
      {}
    )
}

const incrementable = [
  'colors',
  'spacing',
  'borderRadius',
  'borderWidth',
  'boxShadow',
  'flexGrow',
  'flexShrink',
  'fontSize',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'strokeWidth',
  'transitionDuration',
  'transitionDelay',
]

function getColors (increment) {
  const hues = [
    'gray',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'indigo',
    'purple',
    'pink'
  ]
  return hues
    .reduce((linearNumericHues, color) => ({
      ...linearNumericHues,
      [color]: [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((config, num) => ({ ...config, [increment * num]: resolvedDefaultTheme.colors[color][num * 100] }), {})
    }), { ...withoutColorPalettes(resolvedDefaultTheme.colors) })
}

function getResolvedDefaultThemeValue (property, suffix) {
  try {
    return resolvedDefaultTheme[property][suffix]
  } catch (error) {
    if(/Cannot read property .+ of undefined/.test(error.message)) {
      throw new Error(`Baleada Linear Numeric cannot alias the ${property}.${suffix} class, because the resolved default Tailwind theme does not have the ${property} property. Be sure to install the latest version of Tailwind before using Baleada Linear Numeric.`)
    } else {
      throw error
    }
  }
}
