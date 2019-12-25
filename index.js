const defaultTheme = require('tailwindcss/defaultTheme'),

const spacing = {
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '2rem',
  '8': '2.5rem',
  '9': '3rem',
  '10': '4rem',
  '11': '5rem',
  '12': '6rem',
  '13': '8rem',
  '14': '10rem',
  '15': '12rem',
  '16': '14rem',
  '17': '16rem',
}

export const borderRadius = {
  '0': '0',
  default: '0.125rem',
  '1': '0.25rem',
  '2': '0.5rem',
  full: '9999px'
}

export const borderWidth = {
  '0': '0',
  default: '1px',
  '1': '1.5px',
  '2': '2px',
  '3': '4px',
  '4': '8px'
}

export const boxShadow = {
  '0': 'none',
  default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  '1': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  '2': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  '3': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '4': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  '-': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.5)'
}

export const fontSize = {
  '1': '0.75rem',
  '2': '0.875rem',
  '3': '1rem',
  '4': '1.125rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.875rem',
  '8': '2.25rem',
  '9': '3rem',
  '10': '4rem'
}

export const height = {
  auto: 'auto',
  ...spacing,
}

export const letterSpacing = {
  '-2': '-0.05em',
  '-1': '-0.025em',
  '0': '0',
  '1': '0.025em',
  '2': '0.05em',
  '3': '0.1em'
}

export const lineHeight = {
  '0': '1',
  '1': '1.25',
  '2': '1.375',
  '3': '1.5',
  '4': '1.625',
  '5': '2'
}

export const margin = (theme, { negative }) => ({
  auto: 'auto',
  ...spacing,
  ...negative(spacing),
}

export const maxWidth = {
  '1': '20rem',
  '2': '24rem',
  '3': '28rem',
  '4': '32rem',
  '5': '36rem',
  '6': '42rem',
  '7': '48rem',
  '8': '56rem',
  '9': '64rem',
  '10': '72rem',
}

export const minWidth = {
  '0': '0',
  '1': '20rem',
  '2': '24rem',
  '3': '28rem',
  '4': '32rem',
  '5': '36rem',
  '6': '42rem',
  '7': '48rem',
  '8': '56rem',
  '9': '64rem',
  '10': '72rem',
}

export const width = {
  auto: 'auto',
  ...spacing,
}

export const inset = (theme, { negative }) => ({
  auto: 'auto',
  ...spacing,
  ...negative(spacing)
}
