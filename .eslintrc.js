module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'comma-dangle': ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-double'],
    'linebreak-style': 0,
    'arrow-body-style': ['error', 'always'],
    'object-curly-newline': ['error', { multiline: true }],
    semi: ['error', 'never']
  }
}
