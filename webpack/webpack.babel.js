// const base = require('./webpack.base')

module.exports = () => {
    return {
        module: {
            rules: [
                        {
                            test: /\.(js|jsx)$/,
                            exclude: /node_modules/,
                            use: {
                                loader: 'babel-loader',
                                options: {
                                    presets: [
                                        ['@babel/preset-env'],
                                        ['@babel/preset-react'],
                                    ],
                                    plugins: ['@babel/plugin-transform-class-properties',
                                              '@babel/plugin-transform-object-rest-spread'],
                                },
                            },
                        },
                    ],
},
    };
};
