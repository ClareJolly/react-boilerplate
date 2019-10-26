module.exports = {
    automock: false,
    browser: false,
    bail: false,
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/vendor/**'
    ],
    coverageDirectory: '<rootDir>/coverage',
    globals: {
        __DEV__: true
    },
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
    transform: {
        '^.+\\.js?$': 'babel-jest'
    },
    verbose: true,
    // "setupTestFrameworkScriptFile": "jest-mock-console/dist/setupTestFramework.js",
    // setupTestFrameworkScriptFile: './rtl.setup.js'
    // setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    "setupFiles": [
        // "./config/tests/jest.setup.js",
        // "jest-canvas-mock",
        "<rootDir>/setupTests.js"
      ],
};  