import defaultConfig from 'tailwindcss/defaultConfig'
import resolveConfig from 'tailwindcss/resolveConfig'
import { rem, px, screen } from '@baleada/tailwind-theme-utils'

const resolvedDefaultTheme = resolveConfig(defaultConfig).theme

export default function linearNumeric (options = {}) {
  const { increment = 1, only = incrementable } = options,
        colors = getColors(increment),
        linearNumeric = {
          colors,
          spacing: {
            ...px({
              [increment * 1]: resolvedDefaultTheme.spacing.px,
            }),
            [increment * 0]: resolvedDefaultTheme.spacing['0'],
            [increment * 1]: resolvedDefaultTheme.spacing['1'],
            [increment * 2]: resolvedDefaultTheme.spacing['2'],
            [increment * 3]: resolvedDefaultTheme.spacing['3'],
            [increment * 4]: resolvedDefaultTheme.spacing['4'],
            [increment * 5]: resolvedDefaultTheme.spacing['5'],
            [increment * 6]: resolvedDefaultTheme.spacing['6'],
            [increment * 7]: resolvedDefaultTheme.spacing['8'],
            [increment * 8]: resolvedDefaultTheme.spacing['10'],
            [increment * 9]: resolvedDefaultTheme.spacing['12'],
            [increment * 10]: resolvedDefaultTheme.spacing['16'],
            [increment * 11]: resolvedDefaultTheme.spacing['20'],
            [increment * 12]: resolvedDefaultTheme.spacing['24'],
            [increment * 13]: resolvedDefaultTheme.spacing['32'],
            [increment * 14]: resolvedDefaultTheme.spacing['40'],
            [increment * 15]: resolvedDefaultTheme.spacing['48'],
            [increment * 16]: resolvedDefaultTheme.spacing['56'],
            [increment * 17]: resolvedDefaultTheme.spacing['64'],
          },
          borderRadius: {
            [increment * 0]: resolvedDefaultTheme.borderRadius.none,
            [increment * 3]: resolvedDefaultTheme.borderRadius.sm,
            [increment * 4]: resolvedDefaultTheme.borderRadius.default,
            [increment * 5]: resolvedDefaultTheme.borderRadius.md,
            [increment * 6]: resolvedDefaultTheme.borderRadius.lg,
            full: resolvedDefaultTheme.borderRadius.full,
          },
          borderWidth: {
            [increment * 0]: resolvedDefaultTheme.borderWidth['0'],
            [increment * 4]: resolvedDefaultTheme.borderWidth.default,
            [increment * 5]: resolvedDefaultTheme.borderWidth['2'],
            [increment * 6]: resolvedDefaultTheme.borderWidth['4'],
            [increment * 7]: resolvedDefaultTheme.borderWidth['8'],
          },
          boxShadow: {
            [increment * 0]: resolvedDefaultTheme.boxShadow.none,
            [increment * 2]: resolvedDefaultTheme.boxShadow.xs,
            [increment * 3]: resolvedDefaultTheme.boxShadow.sm,
            [increment * 4]: resolvedDefaultTheme.boxShadow.default,
            [increment * 5]: resolvedDefaultTheme.boxShadow.md,
            [increment * 6]: resolvedDefaultTheme.boxShadow.lg,
            [increment * 7]: resolvedDefaultTheme.boxShadow.xl,
            [increment * 8]: resolvedDefaultTheme.boxShadow['2xl'],
            [`-${increment * 4}`]: resolvedDefaultTheme.boxShadow.inner,
            outline: resolvedDefaultTheme.boxShadow.outline,
          },
          flexGrow: {
            [increment * 0]: resolvedDefaultTheme.flexGrow['0'],
            [increment * 4]: resolvedDefaultTheme.flexGrow.default,
          },
          flexShrink: {
            [increment * 0]: resolvedDefaultTheme.flexShrink['0'],
            [increment * 4]: resolvedDefaultTheme.flexShrink.default,
          },
          fontSize: {
            [increment * 2]: resolvedDefaultTheme.fontSize.xs,
            [increment * 3]: resolvedDefaultTheme.fontSize.sm,
            [increment * 4]: resolvedDefaultTheme.fontSize.base,
            [increment * 5]: resolvedDefaultTheme.fontSize.lg,
            [increment * 6]: resolvedDefaultTheme.fontSize.xl,
            [increment * 7]: resolvedDefaultTheme.fontSize['2xl'],
            [increment * 8]: resolvedDefaultTheme.fontSize['3xl'],
            [increment * 9]: resolvedDefaultTheme.fontSize['4xl'],
            [increment * 10]: resolvedDefaultTheme.fontSize['5xl'],
            [increment * 11]: resolvedDefaultTheme.fontSize['6xl'],
          },
          fontWeight: {
            [increment * 1]: resolvedDefaultTheme.fontWeight.hairline,
            [increment * 2]: resolvedDefaultTheme.fontWeight.thin,
            [increment * 3]: resolvedDefaultTheme.fontWeight.light,
            [increment * 4]: resolvedDefaultTheme.fontWeight.normal,
            [increment * 5]: resolvedDefaultTheme.fontWeight.medium,
            [increment * 6]: resolvedDefaultTheme.fontWeight.semibold,
            [increment * 7]: resolvedDefaultTheme.fontWeight.bold,
            [increment * 8]: resolvedDefaultTheme.fontWeight.extrabold,
            [increment * 9]: resolvedDefaultTheme.fontWeight.black,
          },
          letterSpacing: {
            [`-${increment * 2}`]: resolvedDefaultTheme.letterSpacing.tighter,
            [`-${increment * 1}`]: resolvedDefaultTheme.letterSpacing.tight,
            [increment * 0]: resolvedDefaultTheme.letterSpacing.normal,
            [increment * 1]: resolvedDefaultTheme.letterSpacing.wide,
            [increment * 2]: resolvedDefaultTheme.letterSpacing.wider,
            [increment * 3]: resolvedDefaultTheme.letterSpacing.widest,
          },
          lineHeight: {
            [increment * 0]: resolvedDefaultTheme.lineHeight.none,
            [increment * 2]: resolvedDefaultTheme.lineHeight.tight,
            [increment * 3]: resolvedDefaultTheme.lineHeight.snug,
            [increment * 4]: resolvedDefaultTheme.lineHeight.normal,
            [increment * 5]: resolvedDefaultTheme.lineHeight.relaxed,
            [increment * 6]: resolvedDefaultTheme.lineHeight.loose,
            ...rem({
              [increment * 3]: resolvedDefaultTheme.lineHeight['3'],
              [increment * 4]: resolvedDefaultTheme.lineHeight['4'],
              [increment * 5]: resolvedDefaultTheme.lineHeight['5'],
              [increment * 6]: resolvedDefaultTheme.lineHeight['6'],
              [increment * 7]: resolvedDefaultTheme.lineHeight['7'],
              [increment * 8]: resolvedDefaultTheme.lineHeight['8'],
              [increment * 9]: resolvedDefaultTheme.lineHeight['9'],
              [increment * 10]: resolvedDefaultTheme.lineHeight['10'],
            })
          },
          maxHeight: {
            full: resolvedDefaultTheme.maxHeight.full,
            screen: resolvedDefaultTheme.maxHeight.screen,
          },
          maxWidth: {
            [increment * 0]: resolvedDefaultTheme.maxWidth.none,
            [increment * 1]: resolvedDefaultTheme.maxWidth.xs,
            [increment * 2]: resolvedDefaultTheme.maxWidth.sm,
            [increment * 3]: resolvedDefaultTheme.maxWidth.md,
            [increment * 4]: resolvedDefaultTheme.maxWidth.lg,
            [increment * 5]: resolvedDefaultTheme.maxWidth.xl,
            [increment * 6]: resolvedDefaultTheme.maxWidth['2xl'],
            [increment * 7]: resolvedDefaultTheme.maxWidth['3xl'],
            [increment * 8]: resolvedDefaultTheme.maxWidth['4xl'],
            [increment * 9]: resolvedDefaultTheme.maxWidth['5xl'],
            [increment * 10]: resolvedDefaultTheme.maxWidth['6xl'],
            full: resolvedDefaultTheme.maxWidth.full,
            ...screen(resolvedDefaultTheme.screens),
          },
          minHeight: {
            [increment * 0]: resolvedDefaultTheme.minHeight['0'],
            full: resolvedDefaultTheme.minHeight.full,
            screen: resolvedDefaultTheme.minHeight.screen,
          },
          minWidth: {
            [increment * 0]: resolvedDefaultTheme.minWidth['0'],
            full: resolvedDefaultTheme.minWidth.full,
          },
          strokeWidth: {
            [increment * 0]: resolvedDefaultTheme.strokeWidth['0'],
            [increment * 1]: resolvedDefaultTheme.strokeWidth['1'],
            [increment * 2]: resolvedDefaultTheme.strokeWidth['2'],
          },
          transitionDuration: {
            [increment * 1]: resolvedDefaultTheme.transitionDuration['75'],
            [increment * 2]: resolvedDefaultTheme.transitionDuration['100'],
            [increment * 3]: resolvedDefaultTheme.transitionDuration['150'],
            [increment * 4]: resolvedDefaultTheme.transitionDuration['200'],
            [increment * 5]: resolvedDefaultTheme.transitionDuration['300'],
            [increment * 6]: resolvedDefaultTheme.transitionDuration['500'],
            [increment * 7]: resolvedDefaultTheme.transitionDuration['700'],
            [increment * 8]: resolvedDefaultTheme.transitionDuration['1000'],
          },
          // TODO: transitionDelay is coming soon
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
  // transitionDelay,
]

function getColors (increment) {
  const colors = [
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
  return colors
    .reduce((shades, color) => ({
      ...shades,
      [color]: [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((config, num) => ({ ...config, [increment * num]: resolvedDefaultTheme.colors[color][num * 100] }), {})
    }), {})
}