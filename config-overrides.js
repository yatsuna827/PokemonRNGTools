const path = require('path')

module.exports = (config) => {
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,
            '@src': path.resolve(__dirname, './src/')
        }
    }

    return config
}