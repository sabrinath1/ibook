module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    "vue/multi-word-component-names": ["error", {
      "ignores": ["index", "ibook","Header", "Logo", "Footer","about", "Releases", "Chip"],
     
    }],
    "vue/no-v-html":"off",
    'import/named': 0,
  },
}
