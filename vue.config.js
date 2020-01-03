const fix_url = 'http://api.commeister.com';
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: fix_url + '/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}