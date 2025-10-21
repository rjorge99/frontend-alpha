import antfu from '@antfu/eslint-config';
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
    antfu(
        {
            type: 'app',
            vue: true,
            typescript: true,
            formatters: true,
            stylistic: {
                indent: 4,
                semi: true,
                quotes: 'single',
            },
            ignores: ['.pnpm-store/**', '**/migrations/*'],
        },
        {
            rules: {
                'vue/max-attributes-per-line': [
                    'error',
                    {
                        singleline: {
                            max: 2,
                        },
                        multiline: {
                            max: 1,
                        },
                    },
                ],
                'ts/no-redeclare': 'off',
                'ts/consistent-type-definitions': ['error', 'type'],
                'no-console': 'off',
                'antfu/no-top-level-await': ['off'],
                'node/prefer-global/process': ['off'],
                'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
                'node/no-process-env': ['error'],
                'vue/no-multiple-template-root': 'off',
                'no-use-before-define': ['error', {
                    functions: false,
                    classes: false,
                    variables: false,
                    allowNamedExports: false,
                }],
                'vue/html-closing-bracket-newline': [
                    'error',
                    {
                        multiline: 'never',
                    },
                ],

                'vue/singleline-html-element-content-newline': [
                    'error',
                    {
                        ignoreWhenNoAttributes: true,
                        ignoreWhenEmpty: true,
                        ignores: ['div', 'span', 'router-link', 'a'],
                    },
                ],
                'vue/attribute-hyphenation': [
                    'error',
                    'never',
                ],
                'vue/html-self-closing': [
                    'error',
                    {
                        html: {
                            void: 'never', // solo permite autocierre en etiquetas vacías como <br />, <img />, etc.
                            normal: 'never', // <div></div> — evita <div/>
                            component: 'always', // permite <MyComponent /> si lo prefieres
                        },
                        svg: 'always',
                        math: 'always',
                    },
                ],
                'unicorn/filename-case': [
                    'error',
                    {
                        cases: {
                            kebabCase: true,
                            pascalCase: true, // usado para los componentes
                        },
                        ignore: ['README.md'],
                    },
                ],
            },
        },
    ),
);
