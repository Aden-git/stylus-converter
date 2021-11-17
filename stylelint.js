'use strict';

export default {
    extends: ['stylelint-config-standard-scss'],
    rules: {
        "string-quotes": "single",
        "alpha-value-notation": null,
        "scss/dollar-variable-pattern": null,
        "scss/at-mixin-pattern": null,
        "scss/at-function-pattern": null,
        "color-function-notation": null,
        "selector-pseudo-element-no-unknown": [
          true,
          {
            "ignorePseudoElements": [
              "ng-deep",
              "host"
            ]
          }
        ]
    }
}