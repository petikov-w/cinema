const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const mode = process.env.NODE_ENV;

module.exports = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    // exclude: /node_modules/,
                    use: [
                        (mode === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                            },
                        },
                    ],
                },
            ],
        },
    };
};
