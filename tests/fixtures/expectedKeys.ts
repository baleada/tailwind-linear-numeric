function toLinearKeys (end: number, start: number, prefix: string = '') {
  return new Array(end + 1 - start).fill(0).map((_, i) => `${prefix}${i + start}`) 
}

export default {
  colors: ['0.5', '1', '2', '3', '4', '5', '6', '7', '8', '9', '9.5'],
  spacing: ['0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', ...toLinearKeys(29, 4), 'px-1'],
  blur: ['0', ...toLinearKeys(9, 3)],
  borderRadius: ['0', ...toLinearKeys(9, 3), 'full'],
  borderWidth: ['0', ...toLinearKeys(7, 4)],
  boxShadow: ['0', ...toLinearKeys(8, 3), '-4'],
  dropShadow: ['0', ...toLinearKeys(8, 3)],
  flexGrow: ['0', '4'],
  flexShrink: ['0', '4'],
  fontSize: toLinearKeys(14, 2),
  fontWeight: toLinearKeys(9, 1),
  letterSpacing: [...toLinearKeys(3, 0), '-2', '-1'],
  lineHeight: ['0', ...toLinearKeys(6, 2), ...toLinearKeys(10, 3, 'rem-')],
  maxWidth: [...toLinearKeys(11, 0), 'full', 'min', 'max', 'prose', 'screen-sm', 'screen-md', 'screen-lg', 'screen-xl', 'screen-2xl'],
  outlineOffset: toLinearKeys(4, 0),
  outlineWidth: toLinearKeys(4, 0),
  ringOffsetWidth: toLinearKeys(4, 0),
  ringWidth: ['0', ...toLinearKeys(6, 2)],
  textDecorationThickness: [...toLinearKeys(4, 0), 'auto', 'from-font'],
  textUnderlineOffset: [...toLinearKeys(4, 0), 'auto'],
  transitionDuration: toLinearKeys(8, 1),
  transitionDelay: toLinearKeys(8, 1),
}


