const dev = require('./webpack/webpack.dev')
const prod = require('./webpack/webpack.prod')
const common = require('./webpack/webpack.common')
const optimization = require('./webpack/webpack.optimization')
const static = require('./webpack/webpack.static')
const plugins = require('./webpack/webpack.plugins')
const styles = require('./webpack/webpack.styles')
const babel = require('./webpack/webpack.babel')
const alias = require('./webpack/webpack.alias')
const { merge } = require('webpack-merge')

const mode = process.env.NODE_ENV;

console.log('Текущий режим ===>> ', mode);

module.exports = () => {
    if (mode === 'production'){
        return merge([
            common(), alias(), optimization(), babel(), styles(), static(), plugins(), prod()
        ]);
    }
    if (mode === 'development'){
        return merge([
            common(), alias(), babel(), styles(), static(), plugins(), dev()
        ])
    };
}