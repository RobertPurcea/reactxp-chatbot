import * as webpack from 'webpack';
const path = require('path');

const config: webpack.Configuration = {
    entry: "./src/index.tsx",
    
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/')
    },

    devtool: "source-map",

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
        ]
    },

    devServer: {
      contentBase: 'dist'
    }
};

export default config;
