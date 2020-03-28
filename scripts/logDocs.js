const fs = require('fs')

function logDocs () {

  const references = Object.keys(prefixes).map(prefix => {
    let linearNumericKey, defaultKey
    
    switch (prefix) {
    case 'colors':
      break
    case maxWidth:
      break
    default:
      break
    }

    return {
      prefix,
      linearNumericKey,
      defaultKey,
    }
  })

  const rows = references.reduce((rows, { prefix, linearNumericKey, defaultKey }) => {
    return `${rows}| \`.${prefix}-${linearNumericKey}\` | \`.${prefix}-${defaultKey}\` |\n`
  }, '')

  console.log(rows)
}


const prefixes = {
  colors: 'purple',
  spacing: 'w',
  borderRadius: 'rounded',
  borderWidth: 'border',
  boxShadow: 'shadow',
  flexGrow: 'flex-grow',
  flexShrink: 'flex-shrink',
  fontSize: 'text',
  fontWeight: 'font',
  letterSpacing: 'tracking',
  lineHeight: 'leading',
  maxHeight: 'max-h',
  maxWidth: 'max-w',
  minHeight: 'min-h',
  minWidth: 'min-w',
  strokeWidth: 'stroke',
  transitionDuration: 'duration',
}