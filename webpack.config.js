const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    filename: 'bundle[contenthash].js',
    path: path.resolve(__dirname, 'out'),
    clean: true,
  },
  devServer: {
    static: './out',
    hot: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'My App',
      template: './public/index.html',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
