const debug = process.env.NODE_ENV !== "production";
const withFonts = require('next-fonts');

module.exports = withFonts({
    exportPathMap: function () {
        return {
            "/": { page: "/" }
        }
    },
    assetPrefix: !debug ? '/site-privatisation' : '',
    webpack: (config, { dev }) => {
        config.module.rules = config.module.rules.map(rule => {
            if (rule.loader === 'babel-loader') {
                rule.options.cacheDirectory = false
            }
            return rule
        })
        return config
    },
    env: {
        API_URL: "https://immense-refuge-77616.herokuapp.com/createEstimate"
    }
})