import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'

const external = [
        'tailwindcss/defaultTheme',
        '@baleada/tailwind-config-utils',
      ],
      plugins = [
        babel({
          exclude: 'node_modules',
        }),
        resolve(),
      ]

export default [
  {
    external,
    input: 'src/tailwind.js',
    output: { file: 'tailwind/index.js', format: 'cjs' },
    plugins,
  },
]
