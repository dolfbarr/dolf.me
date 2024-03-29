module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
  ],
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        bracketSpacing: true,
        trailingComma: 'all',
        bracketSameLine: true,
      },
    ],
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        enums: 'always-multiline',
      },
    ],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    "@typescript-eslint/indent": 'off',
    'multiline-ternary': 'off',
    'react/jsx-closing-bracket-location': [1, {selfClosing: 'tag-aligned', nonEmpty: 'after-props'}],
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    react: { version: 'detect' },
  },
}
