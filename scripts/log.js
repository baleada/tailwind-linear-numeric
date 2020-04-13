const linearNumeric = require('../lib/index.js'),
      resolveConfig = require('tailwindcss/resolveConfig')

console.log(resolveConfig({ theme: linearNumeric() }))