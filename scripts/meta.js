const fs = require('fs'),
      linearNumeric = require('../lib/index.js'),
      defaultConfig = require('tailwindcss/defaultConfig'),
      resolveConfig = require('tailwindcss/resolveConfig'),
      linearNumericTheme = resolveConfig({ theme: linearNumeric() }).theme,
      resolvedDefaultTheme = resolveConfig(defaultConfig).theme

  
function meta () {
  const linearNumericProperties = Object.keys((({ colors, ...rest }) => ({ blue: colors.blue, ...rest }))(linearNumeric())),
        propertyMetadata = linearNumericProperties.map(property => {
          const suffixes = property === 'blue' 
                  ? Object.keys(linearNumericTheme.colors.blue) 
                  : property === 'spacing'
                    ? Object.keys(linearNumeric({ only: 'spacing' }))
                    : Object.keys(linearNumericTheme[property])
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
            suffixMetadata,
          }
        }),
        classTables = toClassTables(propertyMetadata),
        frontMatter = `\
---\n\
title: Class References\n\
tags: Configuration utilities, Tailwind CSS\n\
publish: true\n\
order: 1\n\
---\n\
\n\
In this article, you'll find a class reference table for each of the properties customized by Baleada Tailwind Linear, matching up their linear numeric class names with the original Tailwind names.\n\
`

  fs.writeFileSync(
    './metadata/class-reference.md',
    `${frontMatter}\n\n${classTables}`
  )
}

function toClassTables (propertyMetadata) {
  return propertyMetadata.reduce((classTables, { name, prefix, suffixMetadata }) => {
    console.log(name)
    const tableBody = suffixMetadata.reduce((tableBody, { suffix, value, tailwindEquivalent }, index) => {
      return `\
${tableBody}${index === 0 ? '' : '\n'}\
| \`.${getClass(prefix, suffix)}\` | \`.${getClass(prefix, tailwindEquivalent)}\` | \`${value}\` |\
`
    }, '')
  
    return `${classTables}\n\n\
:::\n\
## ${name}\n\
:::\n\
\n\
::: ariaLabel="${name} class reference"\n\
| Class | Tailwind equivalent | Value |\n\
| --- | --- | --- |\n\
${tableBody}\n\
:::\n\
`
  }, '')
}

function getClass (prefix, suffix) {
  return suffix.startsWith('-')
    ? `-${prefix}-${suffix.split('').slice(1).join('')}`
    : `${prefix}-${suffix}`
}

const prefixes = {
  blue: {
    name: 'Colors (blue, for example)',
    prefix: 'bg-blue',
  },
  spacing: {
    name: 'Spacing (affects height, width, margin, padding, and translate)',
    prefix: 'h',
  },
  borderRadius: {
    name: 'Border radius',
    prefix: 'rounded',
  },
  borderWidth: {
    name: 'Border width',
    prefix: 'border',
  },
  boxShadow: {
    name: 'Box shadow',
    prefix: 'shadow',
  },
  flexGrow: {
    name: 'Flex grow',
    prefix: 'flex-grow',
  },
  flexShrink: {
    name: 'Flex shrink',
    prefix: 'flex-shrink',
  },
  fontSize: {
    name: 'Font size',
    prefix: 'text',
  },
  fontWeight: {
    name: 'Font weight',
    prefix: 'font',
  },
  letterSpacing: {
    name: 'Letter spacing',
    prefix: 'tracking',
  },
  lineHeight: {
    name: 'Line height',
    prefix: 'leading',
  },
  maxHeight: {
    name: 'Max height',
    prefix: 'max-h',
  },
  maxWidth: {
    name: 'Max width',
    prefix: 'max-w',
  },
  minHeight: {
    name: 'Min height',
    prefix: 'min-h',
  },
  minWidth: {
    name: 'Min width',
    prefix: 'min-w',
  },
  strokeWidth: {
    name: 'Stroke width',
    prefix: 'stroke',
  },
  transitionDuration: {
    name: 'Transition duration',
    prefix: 'duration',
  },
  // screens: {
  //   name: '',
  //   prefix: '',
  // },
  height: {
    name: 'Height',
    prefix: 'h',
  },
  width: {
    name: 'Width',
    prefix: 'w',
  },
  inset: {
    name: 'Inset (top, for example)',
    prefix: 'top',
  },
  objectPosition: {
    name: 'Object position',
    prefix: 'object',
  },
  opacity: {
    name: 'Opacity',
    prefix: 'opacity',
  },
  zIndex: {
    name: 'Z-index',
    prefix: 'z',
  },
}

meta()