const defaultTheme = require('tailwindcss/defaultTheme'),
      incrementable = [
        'spacing',
        'borderRadius',
        'borderWidth',
        'boxShadow',
        'fontSize',
        'fontWeight',
        'letterSpacing',
        'lineHeight',
        'maxWidth',
        'colors',
      ]

module.exports = (options = {}) => {
  const { increment = 100, only = incrementable } = options,
        tailwindLinear = {
          spacing: {
            px: defaultTheme.spacing.px,
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
            [increment * 5]: defaultTheme.borderRadius.lg,
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
            [increment * 4]: defaultTheme.boxShadow.default,
            [increment * 5]: defaultTheme.boxShadow.md,
            [increment * 6]: defaultTheme.boxShadow.lg,
            [increment * 7]: defaultTheme.boxShadow.xl,
            [increment * 8]: defaultTheme.boxShadow['2xl'],
            [`-${increment * 4}`]: defaultTheme.boxShadow.inner,
            outline: defaultTheme.boxShadow.outline,
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
          },
          maxWidth: {
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
          },
        },
        colors = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink']
          .reduce((colors, color) => ({
            ...colors,
            [color]: [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((config, num) => ({ ...config, [increment * num]: defaultTheme.colors[color][num * 100] }), {})
          }), {})

  tailwindLinear.colors = colors

  return only.reduce(
    (theme, property) => ({ ...theme, [property]: tailwindLinear[property] }),
    {}
  )
}
