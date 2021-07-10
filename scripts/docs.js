import { writeFileSync } from 'fs'
import { linearNumeric } from '../lib/index.js'
import defaultConfig from 'tailwindcss/defaultConfig.js'
import resolveConfig from 'tailwindcss/resolveConfig.js'

const linearNumericTheme = resolveConfig({ theme: linearNumeric() }).theme,
      resolvedDefaultTheme = resolveConfig(defaultConfig).theme
  
function meta () {
  const linearNumericProperties = Object.keys((({ colors, ...rest }) => ({ blue: colors.blue, ...rest }))(linearNumeric())),
        propertyMetadata = linearNumericProperties.map(property => {
          console.log(property)
          const suffixes = property === 'blue' 
                  ? Object.keys(linearNumericTheme.colors.blue) 
                  : property === 'spacing'
                    ? Object.keys(linearNumeric({ only: 'spacing' }))
                    : Object.keys(linearNumericTheme[property]),
                suffixMetadata = suffixes.map(suffix => {
                  const value = property === 'blue' 
                    ? linearNumericTheme.colors.blue[suffix] 
                    : property === 'spacing'
                      ? linearNumeric().spacing[suffix]
                      : linearNumericTheme[property][suffix]
                      
                  return {
                    suffix,
                    value,
                    tailwindEquivalent: (() => {
                      const suffixes = property === 'blue' 
                        ? Object.keys(resolvedDefaultTheme.colors.blue) 
                        : property === 'spacing'
                          ? Object.keys(defaultConfig.theme.spacing)
                          : Object.keys(resolvedDefaultTheme[property])
                      return suffixes.find(suffix => {
                        return property === 'blue'
                          ? resolvedDefaultTheme.colors.blue[suffix] === value
                          : property === 'spacing'
                            ? defaultConfig.theme.spacing[suffix] === value
                            : resolvedDefaultTheme[property][suffix] === value
                      })
                    })(),
                  }
                })

          return {
            name: prefixes[property].name,
            prefix: prefixes[property].prefix,
            notes: prefixes[property].notes,
            suffixMetadata,
          }
        }),
        classTables = toClassTables(propertyMetadata),
        frontMatter = `\
---\n\
title: Class references\n\
tags: Configuration utilities, Tailwind CSS\n\
publish: true\n\
order: 1\n\
---\n\
\n\
In this article, you'll find a class reference table for each of the properties customized by Baleada Tailwind Linear, matching up their linear numeric class names with the original Tailwind names.\n\
`

  writeFileSync(
    './docs/class-references.prose',
    `${frontMatter}\n\n${classTables}`
  )
}

function toClassTables (propertyMetadata) {
  return propertyMetadata.reduce((classTables, { name, prefix, notes, suffixMetadata }) => {
    const tableBody = suffixMetadata.reduce((tableBody, { suffix, value, tailwindEquivalent }, index) => {
      return `\
${tableBody}${index === 0 ? '' : '\n'}\
| \`.${toClass({ prefix, suffix })}\` | \`.${toClass({ prefix, suffix: tailwindEquivalent })}\` | \`${value}\` |\
`
    }, '')
  
    return `${classTables}\n\n\
:::\n\
## ${name}\n\
:::\n\
${notes ? '\n' + notes + '\n\n' : '\n'}\
::: ariaLabel="${name} class reference"\n\
| Class | Tailwind equivalent | Value |\n\
| --- | --- | --- |\n\
${tableBody}\n\
:::\n\
`
  }, '')
}

function toClass ({ prefix, suffix }) {
  return (suffix.startsWith('-')
    ? `-${prefix}-${suffix.split('').slice(1).join('')}`
    : `${prefix}-${suffix}`).replace(/-DEFAULT$/, '')
}

const prefixes = {
  blue: {
    name: 'Colors',
    prefix: 'bg-blue',
    notes: 'Blue is shown here as an example, but Baleada Linear Numeric includes all of the default Tailwind colors.\n\nBaleada Linear Numeric also includes Tailwind\'s default standalone colors `black`, `white`, and `transparent`.',
  },
  spacing: {
    name: 'Spacing',
    prefix: 'h',
    notes: '`height` is shown here as an example, but spacing also affects `width`, `margin`, `padding`, `translate`, `gap`, `space`, and `divide` utilities.',
  },
  blur: {
    name: 'Blur',
    prefix: 'blur',
    notes: '',
  },
  borderRadius: {
    name: 'Border radius',
    prefix: 'rounded',
    notes: '',
  },
  borderWidth: {
    name: 'Border width',
    prefix: 'border',
    notes: '',
  },
  boxShadow: {
    name: 'Box shadow',
    prefix: 'shadow',
    notes: '',
  },
  dropShadow: {
    name: 'Drop shadow',
    prefix: 'drop-shadow',
    notes: '',
  },
  flexGrow: {
    name: 'Flex grow',
    prefix: 'flex-grow',
    notes: '',
  },
  flexShrink: {
    name: 'Flex shrink',
    prefix: 'flex-shrink',
    notes: '',
  },
  fontSize: {
    name: 'Font size',
    prefix: 'text',
    notes: '',
  },
  fontWeight: {
    name: 'Font weight',
    prefix: 'font',
    notes: '',
  },
  letterSpacing: {
    name: 'Letter spacing',
    prefix: 'tracking',
    notes: '',
  },
  lineHeight: {
    name: 'Line height',
    prefix: 'leading',
    notes: '',
  },
  maxHeight: {
    name: 'Max height',
    prefix: 'max-h',
    notes: '',
  },
  maxWidth: {
    name: 'Max width',
    prefix: 'max-w',
    notes: '',
  },
  minHeight: {
    name: 'Min height',
    prefix: 'min-h',
    notes: '',
  },
  minWidth: {
    name: 'Min width',
    prefix: 'min-w',
    notes: '',
  },
  strokeWidth: {
    name: 'Stroke width',
    prefix: 'stroke',
    notes: '',
  },
  ringOffsetWidth: {
    name: 'Ring offset width',
    prefix: 'ring-offset',
    notes: '',
  },
  ringWidth: {
    name: 'Ring width',
    prefix: 'ring',
    notes: '',
  },
  transitionDuration: {
    name: 'Transition duration',
    prefix: 'duration',
    notes: '',
  },
  transitionDelay: {
    name: 'Transition delay',
    prefix: 'delay',
    notes: '',
  },
  height: {
    name: 'Height',
    prefix: 'h',
    notes: '',
  },
  width: {
    name: 'Width',
    prefix: 'w',
    notes: '',
  },
  inset: {
    name: 'Inset',
    prefix: 'top',
    notes: '`top` is shown here as an example, but the same configuration applies for `right`, `bottom`, and `left`.',
  },
  objectPosition: {
    name: 'Object position',
    prefix: 'object',
    notes: '',
  },
  opacity: {
    name: 'Opacity',
    prefix: 'opacity',
    notes: '',
  },
  zIndex: {
    name: 'Z-index',
    prefix: 'z',
    notes: '',
  },
}

meta()
