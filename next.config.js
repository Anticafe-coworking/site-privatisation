module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpg|woff|svg|eot|ttf|woff2|otf)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[ext]'

            }
        ]
    }
}