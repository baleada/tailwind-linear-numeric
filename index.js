const defaultTheme = require('tailwindcss/defaultTheme')

const spacing = {
  px: defaultTheme.spacing.px,
  '0': defaultTheme.spacing['0'],
  '100': defaultTheme.spacing['1'],
  '200': defaultTheme.spacing['2'],
  '300': defaultTheme.spacing['3'],
  '400': defaultTheme.spacing['4'],
  '500': defaultTheme.spacing['5'],
  '600': defaultTheme.spacing['6'],
  '700': defaultTheme.spacing['8'],
  '800': defaultTheme.spacing['10'],
  '900': defaultTheme.spacing['12'],
  '1000': defaultTheme.spacing['16'],
  '1100': defaultTheme.spacing['20'],
  '1200': defaultTheme.spacing['24'],
  '1300': defaultTheme.spacing['32'],
  '1400': defaultTheme.spacing['40'],
  '1500': defaultTheme.spacing['48'],
  '1600': defaultTheme.spacing['56'],
  '1700': defaultTheme.spacing['64'],
}

module.exports.borderRadius = {
  '0': defaultTheme.borderRadius.none,
  '300': defaultTheme.borderRadius.sm,
  '400': defaultTheme.borderRadius.default,
  '500': defaultTheme.borderRadius.lg,
  full: defaultTheme.borderRadius.full,
}

module.exports.borderWidth = {
  '0': defaultTheme.borderWidth['0'],
  '400': defaultTheme.borderWidth.default,
  '500': defaultTheme.borderWidth['2'],
  '600': defaultTheme.borderWidth['4'],
  '700': defaultTheme.borderWidth['8'],
}

module.exports.boxShadow = {
  '0': defaultTheme.boxShadow.none,
  '400': defaultTheme.boxShadow.default,
  '500': defaultTheme.boxShadow.md,
  '600': defaultTheme.boxShadow.lg,
  '700': defaultTheme.boxShadow.xl,
  '800': defaultTheme.boxShadow['2xl'],
  '-400': defaultTheme.boxShadow.inner,
  outline: defaultTheme.boxShadow.outline,
}

module.exports.fontSize = {
  '200': defaultTheme.fontSize.xs,
  '300': defaultTheme.fontSize.sm,
  '400': defaultTheme.fontSize.base,
  '500': defaultTheme.fontSize.lg,
  '600': defaultTheme.fontSize.xl,
  '700': defaultTheme.fontSize['2xl'],
  '800': defaultTheme.fontSize['3xl'],
  '900': defaultTheme.fontSize['4xl'],
  '1000': defaultTheme.fontSize['5xl'],
  '1100': defaultTheme.fontSize['6xl'],
}

module.exports.fontWeight = {
  '100': defaultTheme.fontWeight.hairline,
  '200': defaultTheme.fontWeight.thin,
  '300': defaultTheme.fontWeight.light,
  '400': defaultTheme.fontWeight.normal,
  '500': defaultTheme.fontWeight.medium,
  '600': defaultTheme.fontWeight.semibold,
  '700': defaultTheme.fontWeight.bold,
  '800': defaultTheme.fontWeight.extrabold,
  '900': defaultTheme.fontWeight.black,
}

module.exports.height = {
  auto: defaultTheme.height.auto,
  ...spacing,
  full: defaultTheme.height.full,
  screen: defaultTheme.height.screen,
}

module.exports.letterSpacing = {
  '-200': defaultTheme.letterSpacing.tighter,
  '-100': defaultTheme.letterSpacing.tight,
  '0': defaultTheme.letterSpacing.normal,
  '100': defaultTheme.letterSpacing.wide,
  '200': defaultTheme.letterSpacing.wider,
  '300': defaultTheme.letterSpacing.widest,
}

module.exports.lineHeight = {
  '0': defaultTheme.lineHeight.none,
  '200': defaultTheme.lineHeight.tight,
  '300': defaultTheme.lineHeight.snug,
  '400': defaultTheme.lineHeight.normal,
  '500': defaultTheme.lineHeight.relaxed,
  '600': defaultTheme.lineHeight.loose,
}

module.exports.margin = (theme, { negative }) => ({
  auto: defaultTheme.margin.auto,
  ...spacing,
  ...negative(spacing),
}

module.exports.maxWidth = {
  '100': defaultTheme.maxWidth.xs,
  '200': defaultTheme.maxWidth.sm,
  '300': defaultTheme.maxWidth.md,
  '400': defaultTheme.maxWidth.lg,
  '500': defaultTheme.maxWidth.xl,
  '600': defaultTheme.maxWidth['2xl'],
  '700': defaultTheme.maxWidth['3xl'],
  '800': defaultTheme.maxWidth['4xl'],
  '900': defaultTheme.maxWidth['5xl'],
  '1000': defaultTheme.maxWidth['6xl'],
  full: defaultTheme.maxWidth.full,
}

module.exports.width = {
  auto: defaultTheme.width.auto,
  ...spacing,
  '1/2': defaultTheme.width['1/2'],
  '1/3': defaultTheme.width['1/3'],
  '2/3': defaultTheme.width['2/3'],
  '1/4': defaultTheme.width['1/4'],
  '2/4': defaultTheme.width['2/4'],
  '3/4': defaultTheme.width['3/4'],
  '1/5': defaultTheme.width['1/5'],
  '2/5': defaultTheme.width['2/5'],
  '3/5': defaultTheme.width['3/5'],
  '4/5': defaultTheme.width['4/5'],
  '1/6': defaultTheme.width['1/6'],
  '2/6': defaultTheme.width['2/6'],
  '3/6': defaultTheme.width['3/6'],
  '4/6': defaultTheme.width['4/6'],
  '5/6': defaultTheme.width['5/6'],
  '1/12': defaultTheme.width['1/12'],
  '2/12': defaultTheme.width['2/12'],
  '3/12': defaultTheme.width['3/12'],
  '4/12': defaultTheme.width['4/12'],
  '5/12': defaultTheme.width['5/12'],
  '6/12': defaultTheme.width['6/12'],
  '7/12': defaultTheme.width['7/12'],
  '8/12': defaultTheme.width['8/12'],
  '9/12': defaultTheme.width['9/12'],
  '10/12': defaultTheme.width['10/12'],
  '11/12': defaultTheme.width['11/12'],
  full: defaultTheme.width.full,
  screen: defaultTheme.width.screen,
}
