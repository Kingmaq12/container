const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const AtriomPlugin = require('atriom-plugin');
const DefinePlugin = require('webpack').DefinePlugin;
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const envConfig = require('./config').envConfig;

module.exports = {
    entry: './src/index',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3001,
        historyApiFallback: true,
        hot: true,
    },
    output: {
        publicPath: '/',
    },
    optimization: {
        chunkIds: 'named',
    },
    stats: {
        chunks: true,
        modules: false,
        chunkModules: true,
        chunkOrigins: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 2, sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader' },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx'],
    },
    plugins: [
        new ESLintPlugin(),
        new AtriomPlugin({
            filename: 'atriom',
            outputPath: path.join(__dirname, '../'),
        }),
        new DefinePlugin({
            'process.env': JSON.stringify(envConfig.parsed),
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].min.css',
        }),
        new ModuleFederationPlugin({
            name: 'Container',
            remotes: {
                RickAndMorty: 'RickAndMorty@http://localhost:3005/remoteEntry.js',
                Pokemon: 'Pokemon@http://localhost:3006/remoteEntry.js',
            },
            shared: {
                react: {
                    singleton: true,
                },
                'react-dom': {
                    singleton: true,
                },
                'react-router-dom': {
                    singleton: true,
                },
                '@material-ui/core': {
                    singleton: true,
                },
                '@material-ui/icons': {
                    singleton: true,
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
