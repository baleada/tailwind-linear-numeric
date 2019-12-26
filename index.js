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
      ]

module.exports = (options = {}) => {
  const { multiplier = 100, only = incrementable } = options,
        tailwindLinear = {
          spacing: {
            px: defaultTheme.spacing.px,
            [multiplier * 0]: defaultTheme.spacing['0'],
            [multiplier * 1]: defaultTheme.spacing['1'],
            [multiplier * 2]: defaultTheme.spacing['2'],
            [multiplier * 3]: defaultTheme.spacing['3'],
            [multiplier * 4]: defaultTheme.spacing['4'],
            [multiplier * 5]: defaultTheme.spacing['5'],
            [multiplier * 6]: defaultTheme.spacing['6'],
            [multiplier * 7]: defaultTheme.spacing['8'],
            [multiplier * 8]: defaultTheme.spacing['10'],
            [multiplier * 9]: defaultTheme.spacing['12'],
            [multiplier * 10]: defaultTheme.spacing['16'],
            [multiplier * 11]: defaultTheme.spacing['20'],
            [multiplier * 12]: defaultTheme.spacing['24'],
            [multiplier * 13]: defaultTheme.spacing['32'],
            [multiplier * 14]: defaultTheme.spacing['40'],
            [multiplier * 15]: defaultTheme.spacing['48'],
            [multiplier * 16]: defaultTheme.spacing['56'],
            [multiplier * 17]: defaultTheme.spacing['64'],
          },
          borderRadius: {
            [multiplier * 0]: defaultTheme.borderRadius.none,
            [multiplier * 3]: defaultTheme.borderRadius.sm,
            [multiplier * 4]: defaultTheme.borderRadius.default,
            [multiplier * 5]: defaultTheme.borderRadius.lg,
            full: defaultTheme.borderRadius.full,
          },
          borderWidth: {
            [multiplier * 0]: defaultTheme.borderWidth['0'],
            [multiplier * 4]: defaultTheme.borderWidth.default,
            [multiplier * 5]: defaultTheme.borderWidth['2'],
            [multiplier * 6]: defaultTheme.borderWidth['4'],
            [multiplier * 7]: defaultTheme.borderWidth['8'],
          },
          boxShadow: {
            [multiplier * 0]: defaultTheme.boxShadow.none,
            [multiplier * 4]: defaultTheme.boxShadow.default,
            [multiplier * 5]: defaultTheme.boxShadow.md,
            [multiplier * 6]: defaultTheme.boxShadow.lg,
            [multiplier * 7]: defaultTheme.boxShadow.xl,
            [multiplier * 8]: defaultTheme.boxShadow['2xl'],
            [`-${multiplier * 4}`]: defaultTheme.boxShadow.inner,
            outline: defaultTheme.boxShadow.outline,
          },
          fontSize: {
            [multiplier * 2]: defaultTheme.fontSize.xs,
            [multiplier * 3]: defaultTheme.fontSize.sm,
            [multiplier * 4]: defaultTheme.fontSize.base,
            [multiplier * 5]: defaultTheme.fontSize.lg,
            [multiplier * 6]: defaultTheme.fontSize.xl,
            [multiplier * 7]: defaultTheme.fontSize['2xl'],
            [multiplier * 8]: defaultTheme.fontSize['3xl'],
            [multiplier * 9]: defaultTheme.fontSize['4xl'],
            [multiplier * 10]: defaultTheme.fontSize['5xl'],
            [multiplier * 11]: defaultTheme.fontSize['6xl'],
          },
          fontWeight: {
            [multiplier * 1]: defaultTheme.fontWeight.hairline,
            [multiplier * 2]: defaultTheme.fontWeight.thin,
            [multiplier * 3]: defaultTheme.fontWeight.light,
            [multiplier * 4]: defaultTheme.fontWeight.normal,
            [multiplier * 5]: defaultTheme.fontWeight.medium,
            [multiplier * 6]: defaultTheme.fontWeight.semibold,
            [multiplier * 7]: defaultTheme.fontWeight.bold,
            [multiplier * 8]: defaultTheme.fontWeight.extrabold,
            [multiplier * 9]: defaultTheme.fontWeight.black,
          },
          letterSpacing: {
            [`-${multiplier * 2}`]: defaultTheme.letterSpacing.tighter,
            [`-${multiplier * 1}`]: defaultTheme.letterSpacing.tight,
            [multiplier * 0]: defaultTheme.letterSpacing.normal,
            [multiplier * 1]: defaultTheme.letterSpacing.wide,
            [multiplier * 2]: defaultTheme.letterSpacing.wider,
            [multiplier * 3]: defaultTheme.letterSpacing.widest,
          },
          lineHeight: {
            [multiplier * 0]: defaultTheme.lineHeight.none,
            [multiplier * 2]: defaultTheme.lineHeight.tight,
            [multiplier * 3]: defaultTheme.lineHeight.snug,
            [multiplier * 4]: defaultTheme.lineHeight.normal,
            [multiplier * 5]: defaultTheme.lineHeight.relaxed,
            [multiplier * 6]: defaultTheme.lineHeight.loose,
          },
          maxWidth: {
            [multiplier * 1]: defaultTheme.maxWidth.xs,
            [multiplier * 2]: defaultTheme.maxWidth.sm,
            [multiplier * 3]: defaultTheme.maxWidth.md,
            [multiplier * 4]: defaultTheme.maxWidth.lg,
            [multiplier * 5]: defaultTheme.maxWidth.xl,
            [multiplier * 6]: defaultTheme.maxWidth['2xl'],
            [multiplier * 7]: defaultTheme.maxWidth['3xl'],
            [multiplier * 8]: defaultTheme.maxWidth['4xl'],
            [multiplier * 9]: defaultTheme.maxWidth['5xl'],
            [multiplier * 10]: defaultTheme.maxWidth['6xl'],
            full: defaultTheme.maxWidth.full,
          },
        }

  return only.reduce(
    (theme, property) => ({ ...theme, [property]: tailwindLinear[property] }),
    {}
  )
}
