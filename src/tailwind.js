import defaultTheme from 'tailwindcss/defaultTheme'
import { rem, px } from '@baleada/tailwind-config-utils'

export default function linearNumeric (options = {}) {
  const { increment = 1, only = incrementable } = options,
        colors = getColors(increment),
        linearNumeric = {
          colors,
          spacing: {
            ...px({
              [increment * 1]: defaultTheme.spacing.px,
            }),
            [increment * 0]: defaultTheme.spacing['0'],
            [increment * 1]: defaultTheme.spacing['1'],
            [increment * 2]: defaultTheme.spacing['2'],
            [increment * 3]: defaultTheme.spacing['3'],
            [increment * 4]: defaultTheme.spacing['4'],
            [increment * 5]: defaultTheme.spacing['5'],
            [increment * 6]: defaultTheme.spacing['6'],
            [increment * 7]: defaultTheme.spacing['8'],
            [increment * 8]: defaultTheme.spacing['10'],
            [increment * 9]: defaultTheme.spacing['12'],
            [increment * 10]: defaultTheme.spacing['16'],
            [increment * 11]: defaultTheme.spacing['20'],
            [increment * 12]: defaultTheme.spacing['24'],
            [increment * 13]: defaultTheme.spacing['32'],
            [increment * 14]: defaultTheme.spacing['40'],
            [increment * 15]: defaultTheme.spacing['48'],
            [increment * 16]: defaultTheme.spacing['56'],
            [increment * 17]: defaultTheme.spacing['64'],
          },
          borderRadius: {
            [increment * 0]: defaultTheme.borderRadius.none,
            [increment * 3]: defaultTheme.borderRadius.sm,
            [increment * 4]: defaultTheme.borderRadius.default,
            [increment * 5]: defaultTheme.borderRadius.md,
            [increment * 6]: defaultTheme.borderRadius.lg,
            full: defaultTheme.borderRadius.full,
          },
          borderWidth: {
            [increment * 0]: defaultTheme.borderWidth['0'],
            [increment * 4]: defaultTheme.borderWidth.default,
            [increment * 5]: defaultTheme.borderWidth['2'],
            [increment * 6]: defaultTheme.borderWidth['4'],
            [increment * 7]: defaultTheme.borderWidth['8'],
          },
          boxShadow: {
            [increment * 0]: defaultTheme.boxShadow.none,
            [increment * 2]: defaultTheme.boxShadow.xs,
            [increment * 3]: defaultTheme.boxShadow.sm,
            [increment * 4]: defaultTheme.boxShadow.default,
            [increment * 5]: defaultTheme.boxShadow.md,
            [increment * 6]: defaultTheme.boxShadow.lg,
            [increment * 7]: defaultTheme.boxShadow.xl,
            [increment * 8]: defaultTheme.boxShadow['2xl'],
            [`-${increment * 4}`]: defaultTheme.boxShadow.inner,
            outline: defaultTheme.boxShadow.outline,
          },
          flexGrow: {
            [increment * 0]: defaultTheme.flexGrow['0'],
            [increment * 4]: defaultTheme.flexGrow.default,
          },
          flexShrink: {
            [increment * 0]: defaultTheme.flexShrink['0'],
            [increment * 4]: defaultTheme.flexShrink.default,
          },
          fontSize: {
            [increment * 2]: defaultTheme.fontSize.xs,
            [increment * 3]: defaultTheme.fontSize.sm,
            [increment * 4]: defaultTheme.fontSize.base,
            [increment * 5]: defaultTheme.fontSize.lg,
            [increment * 6]: defaultTheme.fontSize.xl,
            [increment * 7]: defaultTheme.fontSize['2xl'],
            [increment * 8]: defaultTheme.fontSize['3xl'],
            [increment * 9]: defaultTheme.fontSize['4xl'],
            [increment * 10]: defaultTheme.fontSize['5xl'],
            [increment * 11]: defaultTheme.fontSize['6xl'],
          },
          fontWeight: {
            [increment * 1]: defaultTheme.fontWeight.hairline,
            [increment * 2]: defaultTheme.fontWeight.thin,
            [increment * 3]: defaultTheme.fontWeight.light,
            [increment * 4]: defaultTheme.fontWeight.normal,
            [increment * 5]: defaultTheme.fontWeight.medium,
            [increment * 6]: defaultTheme.fontWeight.semibold,
            [increment * 7]: defaultTheme.fontWeight.bold,
            [increment * 8]: defaultTheme.fontWeight.extrabold,
            [increment * 9]: defaultTheme.fontWeight.black,
          },
          letterSpacing: {
            [`-${increment * 2}`]: defaultTheme.letterSpacing.tighter,
            [`-${increment * 1}`]: defaultTheme.letterSpacing.tight,
            [increment * 0]: defaultTheme.letterSpacing.normal,
            [increment * 1]: defaultTheme.letterSpacing.wide,
            [increment * 2]: defaultTheme.letterSpacing.wider,
            [increment * 3]: defaultTheme.letterSpacing.widest,
          },
          lineHeight: {
            [increment * 0]: defaultTheme.lineHeight.none,
            [increment * 2]: defaultTheme.lineHeight.tight,
            [increment * 3]: defaultTheme.lineHeight.snug,
            [increment * 4]: defaultTheme.lineHeight.normal,
            [increment * 5]: defaultTheme.lineHeight.relaxed,
            [increment * 6]: defaultTheme.lineHeight.loose,
            ...rem({
              [increment * 3]: defaultTheme.lineHeight['3'],
              [increment * 4]: defaultTheme.lineHeight['4'],
              [increment * 5]: defaultTheme.lineHeight['5'],
              [increment * 6]: defaultTheme.lineHeight['6'],
              [increment * 7]: defaultTheme.lineHeight['7'],
              [increment * 8]: defaultTheme.lineHeight['8'],
              [increment * 9]: defaultTheme.lineHeight['9'],
              [increment * 10]: defaultTheme.lineHeight['10'],
            })
          },
          maxHeight: {
            full: defaultTheme.maxHeight.full,
            screen: defaultTheme.maxHeight.screen,
          },
          maxWidth: (theme, { breakpoints }) => ({
            [increment * 0]: defaultTheme.maxWidth.none,
            [increment * 1]: defaultTheme.maxWidth.xs,
            [increment * 2]: defaultTheme.maxWidth.sm,
            [increment * 3]: defaultTheme.maxWidth.md,
            [increment * 4]: defaultTheme.maxWidth.lg,
            [increment * 5]: defaultTheme.maxWidth.xl,
            [increment * 6]: defaultTheme.maxWidth['2xl'],
            [increment * 7]: defaultTheme.maxWidth['3xl'],
            [increment * 8]: defaultTheme.maxWidth['4xl'],
            [increment * 9]: defaultTheme.maxWidth['5xl'],
            [increment * 10]: defaultTheme.maxWidth['6xl'],
            full: defaultTheme.maxWidth.full,
            ...breakpoints(theme('screens')),
          }),
          minHeight: {
            [increment * 0]: defaultTheme.minHeight['0'],
            full: defaultTheme.minHeight.full,
            screen: defaultTheme.minHeight.screen,
          },
          minWidth: {
            [increment * 0]: defaultTheme.minWidth['0'],
            full: defaultTheme.minWidth.full,
          },
          strokeWidth: {
            [increment * 0]: defaultTheme.strokeWidth['0'],
            [increment * 1]: defaultTheme.strokeWidth['1'],
            [increment * 2]: defaultTheme.strokeWidth['2'],
          },
          transitionDuration: {
            [increment * 1]: defaultTheme.transitionDuration['75'],
            [increment * 2]: defaultTheme.transitionDuration['100'],
            [increment * 3]: defaultTheme.transitionDuration['150'],
            [increment * 4]: defaultTheme.transitionDuration['200'],
            [increment * 5]: defaultTheme.transitionDuration['300'],
            [increment * 6]: defaultTheme.transitionDuration['500'],
            [increment * 7]: defaultTheme.transitionDuration['700'],
            [increment * 8]: defaultTheme.transitionDuration['1000'],
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
      [color]: [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((config, num) => ({ ...config, [increment * num]: defaultTheme.colors[color][num * 100] }), {})
    }), {})
}