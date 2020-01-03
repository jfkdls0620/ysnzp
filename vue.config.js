module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // target: 'http://api.commeister.com',
                target: 'http://api.commeister.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}