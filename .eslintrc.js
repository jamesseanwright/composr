'use strict';

module.exports = {
    env: {
        es6: true,
        node: true,
        browser: true,
    },

    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },

    extends: 'eslint:recommended',

    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-var': 'error',
        'comma-dangle': ['error', 'always-multiline'],
    },
};
