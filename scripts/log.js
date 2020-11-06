const linearNumeric = require('../lib/index.js'),
      resolveConfig = require('tailwindcss/resolveConfig')

console.log(JSON.stringify(resolveConfig({ theme: linearNumeric() }).theme, null, 2))
