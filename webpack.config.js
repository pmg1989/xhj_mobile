const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const { zhugeAppKey } = require('./src/utils/config')

module.exports = (webpackConfig, env) => {
  const production = env === 'production'

  if (production) {
    webpackConfig.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      })
    )
  }

  webpackConfig.plugins = webpackConfig.plugins.concat([
    new CopyWebpackPlugin([
      {
        from: 'src/public',
        to: production ? '../' : webpackConfig.output.outputPath,
      },
    ]),
    new HtmlWebpackPlugin({
      template: production ? `${__dirname}/src/entry.ejs` : `${__dirname}/src/entry.dev.ejs`,
      filename: production ? '../index.html' : 'index.html',
      minify: production ? {
        collapseWhitespace: true,
      } : null,
      hash: true,
      zhugeAppKey,
    }),
    new SWPrecacheWebpackPlugin({
      // minify: true,
      cacheId: 'antd-mobile-roadhog',
      filename: 'service-worker.js',
    }),
  ])

  return webpackConfig
}
