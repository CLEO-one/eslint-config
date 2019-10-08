  "use strict";

module.exports = {
  "rules": {
    "react/prefer-stateless-function": "warn",
    "linebreak-style": 0,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "no-underscore-dangle": 0,
    "react/no-find-dom-node": 0,
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "react/no-unused-state": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "react/display-name": 0,
    "react/no-string-refs": 0,
    "object-shorthand": ["warn", "always"],
    "array-bracket-newline": ["warn", "consistent"],
    "array-element-newline": ["warn", "consistent"],
    "arrow-body-style": ["warn", "as-needed"],
    "arrow-parens": ["warn", "as-needed"],
    "arrow-spacing": [
      "warn",
      {
        "before": true,
        "after": true
      }
    ],
    "brace-style": [
      "warn",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "generator-star-spacing": [
      "warn",
      {
        "before": false,
        "after": true,
        "method": "before"
      }
    ],
    "curly": ["warn", "all"],
    "dot-location": ["warn", "property"],
    "dot-notation": "warn",
    "no-multi-spaces": "warn",
    "array-bracket-spacing": ["warn", "never"],
    "block-spacing": ["warn", "always"],

    "comma-spacing": [
      "warn",
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": ["warn", "last"],
    "computed-property-spacing": ["warn", "never"],
    "eol-last": ["warn", "unix"],
    "key-spacing": [
      "warn",
      {
        "beforeColon": false,
        "afterColon": true,
        "mode": "strict"
      }
    ],
    "keyword-spacing": [
      "warn",
      {
        "before": true,
        "after": true
      }
    ],
    "lines-between-class-members": [
      "warn",
      "always",
      {
        "exceptAfterSingleLine": true
      }
    ],
    "multiline-comment-style": ["warn", "separate-lines"],
    "newline-per-chained-call": [
      "warn",
      {
        "ignoreChainWithDepth": 3
      }
    ],
    "new-parens": "warn",
    "no-else-return": "warn",
    "no-extra-boolean-cast": "warn",
    "no-floating-decimal": "warn",
    "no-implicit-coercion": "warn",
    "no-lonely-if": "warn",
    "no-multiple-empty-lines": [
      "warn",
      {
        "max": 2,
        "maxEOF": 1
      }
    ],
    "nonblock-statement-body-position": [
      "warn",
      "below",
      {
        "overrides": {
          "if": "beside",
          "else": "beside"
        }
      }
    ],
    "no-unneeded-ternary": [
      "warn",
      {
        "defaultAssignment": false
      }
    ],
    "func-call-spacing": "warn",
    "no-trailing-spaces": "warn",
    "no-useless-computed-key": "warn",
    "no-whitespace-before-property": "warn",
    "object-curly-newline": [
      "warn",
      {
        "consistent": true
      }
    ],
    "object-curly-spacing": ["warn", "always"],
    "object-property-newline": [
      "warn",
      {
        "allowAllPropertiesOnSameLine": true
      }
    ],
    "one-var-declaration-per-line": "warn",
    "operator-assignment": ["warn", "always"],
    "padded-blocks": ["warn", "never"],
    "padding-line-between-statements": [
      "warn",
      {
        "blankLine": "always",
        "prev": "directive",
        "next": "*"
      },
      {
        "blankLine": "never",
        "prev": "directive",
        "next": "directive"
      },
      {
        "blankLine": "always",
        "prev": "cjs-import",
        "next": "*"
      },
      {
        "blankLine": "never",
        "prev": "cjs-import",
        "next": "cjs-import"
      },
      {
        "blankLine": "always",
        "prev": "import",
        "next": "*"
      },
      {
        "blankLine": "never",
        "prev": "import",
        "next": "import"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "cjs-export"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "export"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "class"
      },
      {
        "blankLine": "always",
        "prev": "*",
        "next": "function"
      }
    ],
    "prefer-arrow-callback": [
      "warn",
      {
        "allowNamedFunctions": true
      }
    ],
    "prefer-const": "warn",
    "prefer-numeric-literals": "warn",
    "prefer-object-spread": "warn",
    "prefer-template": "warn",
    "quote-props": ["warn", "as-needed"],
    "rest-spread-spacing": ["warn", "never"],
    "semi-spacing": [
      "warn",
      {
        "before": false,
        "after": true
      }
    ],
    "semi-style": ["warn", "first"],
    "semi": ["warn", "never"],
    "space-before-blocks": ["warn", "always"],
    "space-before-function-paren": [
      "warn",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-in-parens": ["warn", "never"],
    "space-infix-ops": "warn",
    "space-unary-ops": [
      "warn",
      {
        "words": true,
        "nonwords": false
      }
    ],
    "spaced-comment": [
      "warn",
      "always",
      {
        "markers": ["/"]
      }
    ],
    "switch-colon-spacing": "warn",
    "template-curly-spacing": "warn",
    "template-tag-spacing": ["warn", "never"],
    "wrap-iife": ["warn", "inside"],
    "yield-star-spacing": ["warn", "after"],
    "yoda": "warn",
    "import/no-useless-path-segments": "warn",
    "import/newline-after-import": "warn",
    "no-irregular-whitespace": 0
  }
}