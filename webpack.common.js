const path = require('path');
const HtmlPluginWebpack = require('html-webpack-plugin');



module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules : [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlPluginWebpack({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}