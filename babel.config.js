/** @format */

module.exports = function (api) {
    api.cache.using(() => process.env.NODE_ENV === 'development');

    if (api.env('production')) {
        return {
            targets: {
                node: '18.0',
            },
            presets: [
                ['@babel/preset-env'],
                [
                    '@babel/preset-react',
                    {
                        //auto imports the functions that JSX transpiles to
                        //No need for React package to be imported for React components
                        runtime: 'automatic',
                    },
                ],
            ],
            plugins: [
                [
                    'module-resolver',
                    {
                        root: ['.'],
                        alias: {
                            '@': './src',
                        },
                    },
                ],
                ['transform-remove-console'],
            ],
        };
    } else {
        return {
            targets: {
                node: '18.0',
            },
            presets: [
                ['@babel/preset-env'],
                [
                    '@babel/preset-react',
                    {
                        //auto imports the functions that JSX transpiles to
                        //No need for React package to be imported for React components
                        runtime: 'automatic',
                    },
                ],
            ],
            plugins: [
                [
                    'module-resolver',
                    {
                        root: ['.'],
                        alias: {
                            '@': './src',
                        },
                    },
                ],
            ],
        };
    }
};
