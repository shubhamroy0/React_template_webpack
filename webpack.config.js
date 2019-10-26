const HtmlpluginRef = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlpluginRef({
    template: "./src/public/index.html",
    filename: "./index.html"
});
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "main.js"
    },
    plugins: [htmlPlugin],
    module : {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.s?css$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)/,
                loader: "file.loader",
            }
        ]
    }
}