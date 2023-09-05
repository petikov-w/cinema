const path = require('path');

module.exports = () => {
    return {
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, '../src/components'),
                '@images': path.resolve(__dirname, '../src/assets/images/'),
                '@fonts': path.resolve(__dirname, '../src/assets/fonts'),

            },
        },
    };
};