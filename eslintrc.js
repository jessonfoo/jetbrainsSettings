module.exports = {
    "extends": "standard",
    "plugins": [
        "standard"
    ],
    "env": {
        "browser": true,
        "jquery": true
    },
    "globals": {

    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType"                 : "script",
        "allowImportExportEverywhere": false
    },
    "rules" : {
        "strict"                             : 0,
        "brace-style"                        : ["error", "stroustrup", {"allowSingleLine": true}],
        indent                               : 0,
        "no-tabs"                            : 0,
        "key-spacing"                        : 0,
        semi                                 : ["error", "always"],
        "quotes"                             : 0,
        "spaced-comment"                     : 0,
        "space-before-function-paren"        : 0,
        "comma-spacing"                      : 0,
        "keyword-spacing"                    : 0,
        "curly"                              : 0,
        "space-infix-ops"                    : 0,
        "eqeqeq"                             : 0,
        "block-spacing"                      : 0,
        "standard/array-bracket-even-spacing": 0,
        "no-trailing-spaces"                 : 0,
        "camelcase"                          : 0,
        "space-in-parens"                    : 0,
        "one-var"                            : 0,
        "eol-last"                           : 0,
        "padded-blocks"                      : 0,
        "no-unused-vars"                     : ["warn", {"vars": "all"}],
        "no-useless-escapes"                 : 0,
        "no-multiple-empty-lines"            : ["warn", {max: 2}],
        "no-undef"                           : ["warn"]
    }
};
