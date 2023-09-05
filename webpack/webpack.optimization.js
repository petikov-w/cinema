const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = () => {
        return {
            optimization: {
                minimize: true,
                minimizer: [
                  new TerserPlugin( {
                    exclude: /\.(js)$/,
                    parallel: true,
                }                  
                ),
                new CssMinimizerPlugin(),
              ],
              },
        };
};


    



