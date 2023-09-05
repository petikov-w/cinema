const path = require('path');
const mode = process.env.NODE_ENV;

// src: path.join(__dirname, '../src'),
// dist: path.join(__dirname, '../dist'),

module.exports = () => {
    return {
        entry: { cinema: path.join(__dirname, '../src/', 'index.js')},

        output: {
            path: path.join(__dirname, '../dist'),
            filename: (mode === 'development') ? '[name].js' : '[name].[contenthash].js',
            clean: true,
        },

        resolve: {
            extensions: ['.js', '.jsx'],
        },

       
    };
};

