import coreWebVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier';
import importX from 'eslint-plugin-import-x';

const eslintConfig = [
    ...coreWebVitals,
    prettier,
    {
        plugins: {
            'import-x': importX,
        },
        rules: {
            'import-x/order': [
                'error',
                {
                    groups: [
                        ['builtin', 'external'],
                        ['internal'],
                        ['parent', 'sibling', 'index'],
                    ],
                    pathGroups: [
                        {
                            pattern: '@/**',
                            group: 'internal',
                            position: 'before',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['builtin', 'external'],
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
        },
    },
];

export default eslintConfig;
