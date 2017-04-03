import { resolve } from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

// TODO: Correct dist build.
export default {
  entry: {
    app: [
      'webpack-hot-middleware/client',
      resolve(__dirname, 'client/main.js')
    ]
  },
  output: {
    path: resolve(__dirname, 'client_dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  devServer: {
    stats: true,
    publicPath: '/'
  },
  module: {
    rules: [
       {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(), // TODO: Trigger only on dist build.
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'client/index.html'),
      minify: { // TODO: Trigger only on dist build.
        collapseWhitespace: true
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.css', '.scss'],
    alias: {
      src: resolve(__dirname, 'client'),
      components: resolve(__dirname, 'client/components'),
      scss: resolve(__dirname, 'client/scss'),
      store: resolve(__dirname, 'client/store'),
      router: resolve(__dirname, 'client/router'),
    }
  }
}
