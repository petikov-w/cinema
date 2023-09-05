module.exports = () => {
    return {
        devtool: 'eval-source-map',
        devServer: {
            static: {
                publicPath: '/dist/',
            },
            port: 3003,
            hot: true,
            open: true,
            historyApiFallback: true,
        }, 
    };
};



