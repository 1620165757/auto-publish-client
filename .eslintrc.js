module.exports = {
    parser: '@typescript-eslint/parser',
    'env': {
        'browser': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2020,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'indent': [2, 4], // 强制使用一致的缩进
        'eqeqeq': [2, 'always'], // 要求使用 === 和 !==
        'semi': ['error', 'always'], // 要求或禁止使用分号代替 ASI
        // 'quotes': [2, 'single'],  // 强制使用一致的反勾号、双引号或单引号
        'space-infix-ops': 'error',
        'no-unused-vars': [0],
        'no-prototype-builtins':[0]
    }
}
