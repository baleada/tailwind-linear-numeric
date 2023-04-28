import defaultConfig from 'tailwindcss/defaultConfig'
import resolveConfig from 'tailwindcss/resolveConfig'
import { px, rem, screen, withoutColorPalettes as toNamedColors } from '@baleada/tailwind-theme-utils'
import { TailwindCorePlugin } from 'tailwindcss/tailwind-config'

const resolvedDefaultTheme = resolveConfig(defaultConfig).theme

export type LinearNumeric<Only extends string | string[]> = Only extends string
  ? { [suffix: string] : string }
  : Partial<Record<Incrementable, { [suffix: string] : string }>>

export type Incrementable = 'colors'
| 'spacing'
| 'blur'
| 'borderRadius'
| 'borderWidth'
| 'boxShadow'
| 'dropShadow'
| 'flexGrow'
| 'flexShrink'
| 'fontSize'
| 'fontWeight'
| 'letterSpacing'
| 'lineHeight'
| 'maxWidth'
| 'outlineOffset'
| 'outlineWidth'
| 'ringOffsetWidth'
| 'ringWidth'
| 'textDecorationThickness'
| 'textUnderlineOffset'
| 'transitionDuration'
| 'transitionDelay'

export type Options<Only extends string | string []> = {
  increment?: number,
  only?: Only,
}

export function getLinearNumeric<Only extends string | string []> (options: Options<Only> = {}): LinearNumeric<Only> {
  const { increment = 1, only = incrementables } = options,
        ensuredOnly = ensureOnly(only),
        colors = getColors(increment),
        linearNumeric = {
          colors,
          spacing: {
            ...px({ [increment * 1]: getResolvedDefaultThemeValue('spacing', 'px'), }),
            [increment * 0]: getResolvedDefaultThemeValue('spacing', '0'),
            [increment * 0.5]: getResolvedDefaultThemeValue('spacing', '0.5'),
            [increment * 1]: getResolvedDefaultThemeValue('spacing', '1'),
            [increment * 1.5]: getResolvedDefaultThemeValue('spacing', '1.5'),
            [increment * 2]: getResolvedDefaultThemeValue('spacing', '2'),
            [increment * 2.5]: getResolvedDefaultThemeValue('spacing', '2.5'),
            [increment * 3]: getResolvedDefaultThemeValue('spacing', '3'),
            [increment * 3.5]: getResolvedDefaultThemeValue('spacing', '3.5'),
            [increment * 4]: getResolvedDefaultThemeValue('spacing', '4'),
            [increment * 5]: getResolvedDefaultThemeValue('spacing', '5'),
            [increment * 6]: getResolvedDefaultThemeValue('spacing', '6'),
            [increment * 7]: getResolvedDefaultThemeValue('spacing', '7'),
            [increment * 8]: getResolvedDefaultThemeValue('spacing', '8'),
            [increment * 9]: getResolvedDefaultThemeValue('spacing', '9'),
            [increment * 10]: getResolvedDefaultThemeValue('spacing', '10'),
            [increment * 11]: getResolvedDefaultThemeValue('spacing', '11'),
            [increment * 12]: getResolvedDefaultThemeValue('spacing', '12'),
            [increment * 13]: getResolvedDefaultThemeValue('spacing', '14'),
            [increment * 14]: getResolvedDefaultThemeValue('spacing', '16'),
            [increment * 15]: getResolvedDefaultThemeValue('spacing', '20'),
            [increment * 16]: getResolvedDefaultThemeValue('spacing', '24'),
            [increment * 17]: getResolvedDefaultThemeValue('spacing', '28'),
            [increment * 18]: getResolvedDefaultThemeValue('spacing', '32'),
            [increment * 19]: getResolvedDefaultThemeValue('spacing', '36'),
            [increment * 20]: getResolvedDefaultThemeValue('spacing', '40'),
            [increment * 21]: getResolvedDefaultThemeValue('spacing', '44'),
            [increment * 22]: getResolvedDefaultThemeValue('spacing', '48'),
            [increment * 23]: getResolvedDefaultThemeValue('spacing', '52'),
            [increment * 24]: getResolvedDefaultThemeValue('spacing', '56'),
            [increment * 25]: getResolvedDefaultThemeValue('spacing', '60'),
            [increment * 26]: getResolvedDefaultThemeValue('spacing', '64'),
            [increment * 27]: getResolvedDefaultThemeValue('spacing', '72'),
            [increment * 28]: getResolvedDefaultThemeValue('spacing', '80'),
            [increment * 29]: getResolvedDefaultThemeValue('spacing', '96'),
          },
          blur: {
            [increment * 0]: getResolvedDefaultThemeValue('blur', 'none'),
            [increment * 3]: getResolvedDefaultThemeValue('blur', 'sm'),
            [increment * 4]: getResolvedDefaultThemeValue('blur', 'DEFAULT'),
            [increment * 5]: getResolvedDefaultThemeValue('blur', 'md'),
            [increment * 6]: getResolvedDefaultThemeValue('blur', 'lg'),
            [increment * 7]: getResolvedDefaultThemeValue('blur', 'xl'),
            [increment * 8]: getResolvedDefaultThemeValue('blur', '2xl'),
            [increment * 9]: getResolvedDefaultThemeValue('blur', '3xl'),
          },
          borderRadius: {
            [increment * 0]: getResolvedDefaultThemeValue('borderRadius', 'none'),
            [increment * 3]: getResolvedDefaultThemeValue('borderRadius', 'sm'),
            [increment * 4]: getResolvedDefaultThemeValue('borderRadius', 'DEFAULT'),
            [increment * 5]: getResolvedDefaultThemeValue('borderRadius', 'md'),
            [increment * 6]: getResolvedDefaultThemeValue('borderRadius', 'lg'),
            [increment * 7]: getResolvedDefaultThemeValue('borderRadius', 'xl'),
            [increment * 8]: getResolvedDefaultThemeValue('borderRadius', '2xl'),
            [increment * 9]: getResolvedDefaultThemeValue('borderRadius', '3xl'),
            full: getResolvedDefaultThemeValue('borderRadius', 'full'),
          },
          borderWidth: {
            [increment * 0]: getResolvedDefaultThemeValue('borderWidth', '0'),
            [increment * 4]: getResolvedDefaultThemeValue('borderWidth', 'DEFAULT'),
            [increment * 5]: getResolvedDefaultThemeValue('borderWidth', '2'),
            [increment * 6]: getResolvedDefaultThemeValue('borderWidth', '4'),
            [increment * 7]: getResolvedDefaultThemeValue('borderWidth', '8'),
          },
          boxShadow: {
            [increment * 0]: getResolvedDefaultThemeValue('boxShadow', 'none'),
            [increment * 3]: getResolvedDefaultThemeValue('boxShadow', 'sm'),
            [increment * 4]: getResolvedDefaultThemeValue('boxShadow', 'DEFAULT'),
            [increment * 5]: getResolvedDefaultThemeValue('boxShadow', 'md'),
            [increment * 6]: getResolvedDefaultThemeValue('boxShadow', 'lg'),
            [increment * 7]: getResolvedDefaultThemeValue('boxShadow', 'xl'),
            [increment * 8]: getResolvedDefaultThemeValue('boxShadow', '2xl'),
            [`-${increment * 4}`]: getResolvedDefaultThemeValue('boxShadow', 'inner'),
          },
          dropShadow: {
            [increment * 0]: getResolvedDefaultThemeValue('dropShadow', 'none'),
            [increment * 3]: getResolvedDefaultThemeValue('dropShadow', 'sm'),
            [increment * 4]: getResolvedDefaultThemeValue('dropShadow', 'DEFAULT'),
            [increment * 5]: getResolvedDefaultThemeValue('dropShadow', 'md'),
            [increment * 6]: getResolvedDefaultThemeValue('dropShadow', 'lg'),
            [increment * 7]: getResolvedDefaultThemeValue('dropShadow', 'xl'),
            [increment * 8]: getResolvedDefaultThemeValue('dropShadow', '2xl'),
          },
          flexGrow: {
            [increment * 0]: getResolvedDefaultThemeValue('flexGrow', '0'),
            [increment * 4]: getResolvedDefaultThemeValue('flexGrow', 'DEFAULT'),
          },
          flexShrink: {
            [increment * 0]: getResolvedDefaultThemeValue('flexShrink', '0'),
            [increment * 4]: getResolvedDefaultThemeValue('flexShrink', 'DEFAULT'),
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
            [increment * 12]: getResolvedDefaultThemeValue('fontSize', '7xl'),
            [increment * 13]: getResolvedDefaultThemeValue('fontSize', '8xl'),
            [increment * 14]: getResolvedDefaultThemeValue('fontSize', '9xl'),
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
            [increment * 11]: getResolvedDefaultThemeValue('maxWidth', '7xl'),
            full: getResolvedDefaultThemeValue('maxWidth', 'full'),
            min: getResolvedDefaultThemeValue('maxWidth', 'min'),
            max: getResolvedDefaultThemeValue('maxWidth', 'max'),
            prose: getResolvedDefaultThemeValue('maxWidth', 'prose'),
            ...screen(resolvedDefaultTheme.screens as { [suffix: string]: string }),
          },
          outlineOffset: {
            [increment * 0]: getResolvedDefaultThemeValue('outlineOffset', '0'),
            [increment * 1]: getResolvedDefaultThemeValue('outlineOffset', '1'),
            [increment * 2]: getResolvedDefaultThemeValue('outlineOffset', '2'),
            [increment * 3]: getResolvedDefaultThemeValue('outlineOffset', '4'),
            [increment * 4]: getResolvedDefaultThemeValue('outlineOffset', '8'),
          },
          outlineWidth: {
            [increment * 0]: getResolvedDefaultThemeValue('outlineWidth', '0'),
            [increment * 1]: getResolvedDefaultThemeValue('outlineWidth', '1'),
            [increment * 2]: getResolvedDefaultThemeValue('outlineWidth', '2'),
            [increment * 3]: getResolvedDefaultThemeValue('outlineWidth', '4'),
            [increment * 4]: getResolvedDefaultThemeValue('outlineWidth', '8'),
          },
          ringOffsetWidth: {
            [increment * 0]: getResolvedDefaultThemeValue('ringOffsetWidth', '0'),
            [increment * 1]: getResolvedDefaultThemeValue('ringOffsetWidth', '1'),
            [increment * 2]: getResolvedDefaultThemeValue('ringOffsetWidth', '2'),
            [increment * 3]: getResolvedDefaultThemeValue('ringOffsetWidth', '4'),
            [increment * 4]: getResolvedDefaultThemeValue('ringOffsetWidth', '8'),
          },
          ringWidth: {
            [increment * 0]: getResolvedDefaultThemeValue('ringWidth', '0'),
            [increment * 2]: getResolvedDefaultThemeValue('ringWidth', '1'),
            [increment * 3]: getResolvedDefaultThemeValue('ringWidth', '2'),
            [increment * 4]: getResolvedDefaultThemeValue('ringWidth', 'DEFAULT'),
            [increment * 5]: getResolvedDefaultThemeValue('ringWidth', '4'),
            [increment * 6]: getResolvedDefaultThemeValue('ringWidth', '8'),
          },
          textDecorationThickness: {
            [increment * 0]: getResolvedDefaultThemeValue('textDecorationThickness', '0'),
            [increment * 1]: getResolvedDefaultThemeValue('textDecorationThickness', '1'),
            [increment * 2]: getResolvedDefaultThemeValue('textDecorationThickness', '2'),
            [increment * 3]: getResolvedDefaultThemeValue('textDecorationThickness', '4'),
            [increment * 4]: getResolvedDefaultThemeValue('textDecorationThickness', '8'),
            auto: getResolvedDefaultThemeValue('textDecorationThickness', 'auto'),
            'from-font': getResolvedDefaultThemeValue('textDecorationThickness', 'from-font'),
          },
          textUnderlineOffset: {
            [increment * 0]: getResolvedDefaultThemeValue('textDecorationThickness', '0'),
            [increment * 1]: getResolvedDefaultThemeValue('textDecorationThickness', '1'),
            [increment * 2]: getResolvedDefaultThemeValue('textDecorationThickness', '2'),
            [increment * 3]: getResolvedDefaultThemeValue('textDecorationThickness', '4'),
            [increment * 4]: getResolvedDefaultThemeValue('textDecorationThickness', '8'),
            auto: getResolvedDefaultThemeValue('textDecorationThickness', 'auto'),
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
    ? linearNumeric[ensuredOnly[0]]
    : ensuredOnly.reduce<Partial<Record<TailwindCorePlugin, { [suffix: string] : string }>>>(
      (theme, corePlugin) => ({ ...theme, [corePlugin]: linearNumeric[corePlugin] }),
      {}
    )
}

const incrementables = [
  'colors',
  'spacing',
  'blur',
  'borderRadius',
  'borderWidth',
  'boxShadow',
  'dropShadow',
  'flexGrow',
  'flexShrink',
  'fontSize',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'maxWidth',
  'outlineOffset',
  'outlineWidth',
  'ringOffsetWidth',
  'ringWidth',
  'textDecorationThickness',
  'textUnderlineOffset',
  'transitionDuration',
  'transitionDelay',
]

function getColors (increment: number): { [key: string]: string } {
  const hues = []

  for (const hue in resolvedDefaultTheme.colors) {
    if (renamedColors.includes(hue)) {
      continue
    }

    if (typeof resolvedDefaultTheme.colors[hue] === 'string') {
      continue
    }

    hues.push(hue)
  }

  return hues
    .reduce(
      (linearNumericHues, color) => {
        linearNumericHues[color] = [0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9.5].reduce(
          (config, num) => {
            config[increment * num] = resolvedDefaultTheme.colors[color][num * 100]
            return config
          },
          {}
        )

        return linearNumericHues
      },
      // @ts-expect-error
      toNamedColors(resolvedDefaultTheme.colors)
    )
}

const renamedColors = [
  'lightBlue',
  'warmGray',
  'trueGray',
  'coolGray',
  'blueGray',
]

function ensureOnly (only: string | string[]) {
  return typeof only === 'string'
    ? [only]
    : only
}

function getResolvedDefaultThemeValue (corePlugin: string, suffix: string): string {
  try {
    return resolvedDefaultTheme[corePlugin][suffix]
  } catch (error) {
    if(/Cannot read (property|properties)/.test(error.message)) {
      throw new Error(`Baleada Linear Numeric cannot alias the ${corePlugin}.${suffix} class, because the resolved default Tailwind theme does not have the ${corePlugin} core plugin. Be sure to install the latest version of Tailwind before using Baleada Linear Numeric.`)
    } else {
      throw error
    }
  }
}
