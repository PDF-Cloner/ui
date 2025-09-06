import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pluginCypress from 'eslint-plugin-cypress'
import pluginSecurity from 'eslint-plugin-security'
import pluginSonarjs from 'eslint-plugin-sonarjs'
import pluginUnicorn from 'eslint-plugin-unicorn'
import pluginImport from 'eslint-plugin-import'
import pluginNode from 'eslint-plugin-n'
import pluginJsonc from 'eslint-plugin-jsonc'
import pluginVuejsAccessibility from 'eslint-plugin-vuejs-accessibility'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  // Files to lint
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue,js,jsx,mjs,cjs}'],
  },

  // Global ignores
  globalIgnores([
    '**/dist/**', 
    '**/dist-ssr/**', 
    '**/coverage/**',
    '**/node_modules/**',
    '**/.git/**',
    '**/.vscode/**',
    '**/.idea/**',
    '**/build/**',
    '**/cypress/videos/**',
    '**/cypress/screenshots/**',
    '**/*.min.js',
    '**/*.min.css',
    '**/public/assets/**',
    '**/.cache/**',
    '**/.temp/**',
    '**/.tmp/**'
  ]),

  // Vue.js essential configuration
  pluginVue.configs['flat/essential'],

  // TypeScript configuration
  vueTsConfigs.recommended,

  // Security plugin configuration
  {
    name: 'security-rules',
    plugins: {
      security: pluginSecurity
    },
    rules: {
      ...pluginSecurity.configs.recommended.rules,
      // Custom security overrides
      'security/detect-object-injection': 'warn', // Can be noisy
      'security/detect-non-literal-regexp': 'warn', // Often legitimate
      'security/detect-unsafe-regex': 'error',
      'security/detect-buffer-noassert': 'error',
      'security/detect-child-process': 'error',
      'security/detect-disable-mustache-escape': 'error',
      'security/detect-eval-with-expression': 'error',
      'security/detect-no-csrf-before-method-override': 'error',
      'security/detect-pseudoRandomBytes': 'error',
      'security/detect-possible-timing-attacks': 'warn'
    }
  },

  // SonarJS plugin for code quality
  {
    name: 'sonarjs-rules',
    plugins: {
      sonarjs: pluginSonarjs
    },
    rules: {
      // Enable key SonarJS rules (without the performance-heavy ones)
      'sonarjs/cognitive-complexity': ['warn', 15],
      'sonarjs/no-all-duplicated-branches': 'error',
      'sonarjs/no-collapsible-if': 'error',
      'sonarjs/no-collection-size-mischeck': 'error',
      'sonarjs/no-duplicate-string': ['error', 5],
      'sonarjs/no-duplicated-branches': 'error',
      'sonarjs/no-element-overwrite': 'error',
      'sonarjs/no-empty-collection': 'error',
      'sonarjs/no-extra-arguments': 'error',
      'sonarjs/no-gratuitous-expressions': 'error',
      'sonarjs/no-identical-conditions': 'error',
      'sonarjs/no-identical-expressions': 'error',
      'sonarjs/no-ignored-return': 'error',
      'sonarjs/no-inverted-boolean-check': 'error',
      'sonarjs/no-nested-switch': 'error',
      'sonarjs/no-nested-template-literals': 'error',
      'sonarjs/no-one-iteration-loop': 'error',
      'sonarjs/no-redundant-boolean': 'error',
      'sonarjs/no-redundant-jump': 'error',
      'sonarjs/no-same-line-conditional': 'error',
      'sonarjs/no-small-switch': 'error',
      'sonarjs/no-unused-collection': 'error',
      'sonarjs/no-use-of-empty-return-value': 'error',
      'sonarjs/no-useless-catch': 'error',
      'sonarjs/prefer-immediate-return': 'error',
      'sonarjs/prefer-object-literal': 'error',
      'sonarjs/prefer-single-boolean-return': 'error',
      'sonarjs/prefer-while': 'error',

      // Disable performance-heavy rules
      'sonarjs/deprecation': 'off', // Very slow
      'sonarjs/arguments-order': 'off' // Very slow
    }
  },

  // Unicorn plugin for best practices
  {
    name: 'unicorn-rules',
    plugins: {
      unicorn: pluginUnicorn
    },
    rules: {
      // Enable selective Unicorn rules
      'unicorn/better-regex': 'error',
      'unicorn/catch-error-name': 'error',
      'unicorn/consistent-destructuring': 'error',
      'unicorn/consistent-function-scoping': 'error',
      'unicorn/custom-error-definition': 'error',
      'unicorn/error-message': 'error',
      'unicorn/escape-case': 'error',
      'unicorn/expiring-todo-comments': 'error',
      'unicorn/explicit-length-check': 'error',
      'unicorn/filename-case': ['error', { case: 'kebabCase' }],
      'unicorn/new-for-builtins': 'error',
      'unicorn/no-abusive-eslint-disable': 'error',
      'unicorn/no-array-instanceof': 'error',
      'unicorn/no-console-spaces': 'error',
      'unicorn/no-for-loop': 'error',
      'unicorn/no-hex-escape': 'error',
      'unicorn/no-instanceof-array': 'error',
      'unicorn/no-new-buffer': 'error',
      'unicorn/no-unsafe-regex': 'error',
      'unicorn/number-literal-case': 'error',
      'unicorn/prefer-add-event-listener': 'error',
      'unicorn/prefer-array-find': 'error',
      'unicorn/prefer-array-flat-map': 'error',
      'unicorn/prefer-array-index-of': 'error',
      'unicorn/prefer-array-some': 'error',
      'unicorn/prefer-date-now': 'error',
      'unicorn/prefer-includes': 'error',
      'unicorn/prefer-math-trunc': 'error',
      'unicorn/prefer-modern-dom-apis': 'error',
      'unicorn/prefer-negative-index': 'error',
      'unicorn/prefer-number-properties': 'error',
      'unicorn/prefer-optional-catch-binding': 'error',
      'unicorn/prefer-query-selector': 'error',
      'unicorn/prefer-reflect-apply': 'error',
      'unicorn/prefer-string-starts-ends-with': 'error',
      'unicorn/prefer-string-trim-start-end': 'error',
      'unicorn/prefer-type-error': 'error',
      'unicorn/throw-new-error': 'error',

      // Disable controversial rules
      'unicorn/prevent-abbreviations': 'off', // Too opinionated
      'unicorn/no-null': 'off', // Vue sometimes needs null
      'unicorn/prefer-ternary': 'off' // Sometimes less readable
    }
  },

  // Import plugin for dependency management
  {
    name: 'import-rules',
    plugins: {
      'import': pluginImport
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index'
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ],
      'import/no-unresolved': 'error',
      'import/no-duplicates': 'error',
      'import/no-unused-modules': 'warn',
      'import/first': 'error',
      'import/no-mutable-exports': 'error',
      'import/newline-after-import': 'error'
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.app.json'
        }
      }
    }
  },

  // Node.js specific rules
  {
    name: 'node-rules',
    plugins: {
      n: pluginNode
    },
    rules: {
      'n/no-deprecated-api': 'error',
      'n/no-extraneous-import': 'error',
      'n/no-missing-import': 'off', // Handled by TypeScript
      'n/no-unpublished-import': 'off', // Dev dependencies are OK
      'n/prefer-global/process': 'error',
      'n/prefer-global/buffer': 'error',
      'n/prefer-global/console': 'error',
      'n/prefer-global/url': 'error',
      'n/prefer-global/url-search-params': 'error'
    }
  },

  // Vue.js accessibility rules
  {
    name: 'vue-accessibility',
    files: ['**/*.vue'],
    plugins: {
      'vuejs-accessibility': pluginVuejsAccessibility
    },
    rules: {
      'vuejs-accessibility/alt-text': 'error',
      'vuejs-accessibility/anchor-has-content': 'error',
      'vuejs-accessibility/aria-props': 'error',
      'vuejs-accessibility/aria-role': 'error',
      'vuejs-accessibility/aria-unsupported-elements': 'error',
      'vuejs-accessibility/click-events-have-key-events': 'warn',
      'vuejs-accessibility/form-control-has-label': 'error',
      'vuejs-accessibility/heading-has-content': 'error',
      'vuejs-accessibility/interactive-supports-focus': 'error',
      'vuejs-accessibility/label-has-for': 'error',
      'vuejs-accessibility/mouse-events-have-key-events': 'warn',
      'vuejs-accessibility/no-access-key': 'error',
      'vuejs-accessibility/no-autofocus': 'warn',
      'vuejs-accessibility/no-distracting-elements': 'error',
      'vuejs-accessibility/no-onchange': 'error',
      'vuejs-accessibility/no-redundant-roles': 'error',
      'vuejs-accessibility/role-has-required-aria-props': 'error',
      'vuejs-accessibility/tabindex-no-positive': 'error'
    }
  },

  // JSON configuration
  {
    name: 'json-files',
    files: ['**/*.json', '**/*.jsonc'],
    plugins: {
      jsonc: pluginJsonc
    },
    rules: {
      'jsonc/sort-keys': 'warn',
      'jsonc/no-comments': 'off', // Allow comments in jsonc
      'jsonc/comma-dangle': 'off'
    }
  },

  // Vitest testing configuration
  {
    name: 'vitest-files',
    files: ['src/**/__tests__/*'],
    plugins: {
      vitest: pluginVitest
    },
    rules: {
      ...pluginVitest.configs.recommended.rules,
      // Custom test rules
      'vitest/consistent-test-it': ['error', { fn: 'it' }],
      'vitest/no-focused-tests': 'error',
      'vitest/no-disabled-tests': 'warn',
      'vitest/prefer-to-have-length': 'error',
      'vitest/prefer-to-be-truthy': 'error',
      'vitest/prefer-to-be-falsy': 'error',
      'vitest/expect-expect': 'error'
    }
  },

  // Cypress E2E testing configuration
  {
    name: 'cypress-files',
    files: [
      'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
      'cypress/support/**/*.{js,ts,jsx,tsx}'
    ],
    plugins: {
      cypress: pluginCypress
    },
    rules: {
      ...pluginCypress.configs.recommended.rules,
      // Custom Cypress rules
      'cypress/no-unnecessary-waiting': 'error',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-force': 'warn',
      'cypress/no-async-tests': 'error',
      'cypress/unsafe-to-chain-command': 'error'
    }
  },

  // Enhanced TypeScript rules
  {
    name: 'typescript-enhancements',
    files: ['**/*.{ts,tsx,mts,cts}'],
    rules: {
      // Type safety enhancements
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/prefer-readonly': 'warn',
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-redundant-type-constituents': 'error',
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/prefer-enum-initializers': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-reduce-type-parameter': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error'
    }
  },

  // Vue.js specific enhancements
  {
    name: 'vue-enhancements',
    files: ['**/*.vue'],
    rules: {
      // Vue 3 Composition API best practices
      'vue/prefer-import-from-vue': 'error',
      'vue/prefer-separate-static-class': 'error',
      'vue/prefer-true-attribute-shorthand': 'error',
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/custom-event-name-casing': 'error',
      'vue/define-macros-order': 'error',
      'vue/html-button-has-type': 'error',
      'vue/html-comment-content-spacing': 'error',
      'vue/no-empty-component-block': 'error',
      'vue/no-multiple-objects-in-class': 'error',
      'vue/no-potential-component-option-typo': 'error',
      'vue/no-required-prop-with-default': 'error',
      'vue/no-static-inline-styles': 'warn',
      'vue/no-template-target-blank': 'error',
      'vue/no-undef-components': 'error',
      'vue/no-undef-properties': 'error',
      'vue/no-unused-properties': 'warn',
      'vue/no-unused-refs': 'error',
      'vue/no-use-v-else-with-v-for': 'error',
      'vue/no-useless-mustaches': 'error',
      'vue/no-useless-v-bind': 'error',
      'vue/padding-line-between-blocks': 'error',
      'vue/prefer-prop-type-boolean-first': 'error',
      'vue/require-macro-variable-name': 'error',
      'vue/v-for-delimiter-style': 'error',
      'vue/valid-define-options': 'error'
    }
  },

  // Enhanced general rules
  {
    name: 'general-enhancements',
    rules: {
      // Performance and best practices
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-alert': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-script-url': 'error',
      'no-return-assign': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unused-expressions': 'error',
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'prefer-promise-reject-errors': 'error',
      'require-await': 'error',

      // Code quality
      'complexity': ['warn', 10],
      'max-depth': ['warn', 4],
      'max-lines': ['warn', 500],
      'max-lines-per-function': ['warn', 100],
      'max-nested-callbacks': ['warn', 3],
      'max-params': ['warn', 4],

      // Modern JavaScript
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'prefer-spread': 'error',
      'prefer-rest-params': 'error',
      'prefer-destructuring': ['error', { object: true, array: false }],
      'object-shorthand': 'error',
      'no-var': 'error'
    }
  },

  // Skip formatting conflicts with Prettier
  skipFormatting
)
