import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: `${__dirname}/src`,
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: `${__dirname}/src/index.html`, filename: 'index.html', inject: 'body' }),
    new ExtractTextPlugin('styles.css'),
  ],

  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: ['babel-loader', {
          loader: 'eslint-loader',
          options: {
            failOnWarning: false,
            failOnError: false,
            emitWarning: true,
          },
        }],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/, 
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
};

