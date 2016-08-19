import buble from 'rollup-plugin-buble'

export default {
  entry: 'index.js',
  plugins: [ buble() ],
  format: 'cjs',
  dest: '{{ name }}.js'
}
