const webpack = require('webpack');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const path  = require('path');
const distDir = path.resolve(__dirname, '..', 'dist');

module.exports = require('./webpack.config')({
    mode: 'development',

    appendAppEntry: 'webpack-plugin-serve/client',

    plugins: [
        new webpack.DefinePlugin({ 'CANVAS_RENDERER': JSON.stringify(true), 'WEBGL_RENDERER': JSON.stringify(true) }),
        new Serve({
          static: distDir,
          host: '127.0.0.1',
          port: '8000',
          hmr: false,
          open: true,
          liveReload: true
        })
    ],

    watch: true
});
