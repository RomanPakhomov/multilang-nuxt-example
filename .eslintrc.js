module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: ["nuxt.config.js", ".eslintrc.js"],
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/max-attributes-per-line': "off",
    "vue/component-definition-name-casing": "off",
    "vue/valid-v-for": "off"
  },
}
