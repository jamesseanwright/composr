'use strict';

module.exports = {
    testMatch: ['<rootDir>/src/__tests__/**/*.test.mjs'],
    moduleFileExtensions: ['js', 'mjs'],
    transform: {
        '.*\\.mjs': 'babel-jest',
    },
};
