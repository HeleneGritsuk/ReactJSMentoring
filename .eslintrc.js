module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "allowImportExportEverywhere": true
    },
    "env": {
        "browser": true,
        "es6": true,
        "jest/globals": true
    },
    "plugins": ["prettier", "jest", "react"],
    "extends": ["airbnb-base", "plugin:react/recommended", "prettier"],
    "rules": {
        "prettier/prettier": "error",
        "import/no-unresolved": [
            "error",
            {
                "commonjs": true,
                "caseSensitive": false
            }
        ],
        "arrow-body-style": ["error", "as-needed"],
        "linebreak-style": "off",
        "key-spacing": "off",
        "no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": true,
                "allowTernary": true,
                "allowTaggedTemplates": true
            }
        ],

        "no-plusplus": "off",
        "new-cap": "off",
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "no-underscore-dangle": "off",
        "class-methods-use-this": "off",
        "object-shorthand": [
            "error",
            "always",
            {
                "avoidQuotes": false
            }
        ],
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [".js", ".jsx"]
            }
        ],
        "react/jsx-indent": [2, 4],
        "react/prop-types": [
            "error",
            {
                "ignore": ["children"]
            }
        ],
        "react/no-array-index-key": "off",
        "react/forbid-prop-types": "off",
        "react/jsx-indent-props": "off",
        "react/no-find-dom-node": "off",
        "camelcase": "warn"
    }
}
