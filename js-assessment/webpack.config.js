const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',

  entry: {
    exercise1: './src/scripts/exercise1.js',
    exercise2: './src/scripts/exercise2.js'
  },

  output: {
    path: path.resolve(__dirname, 'public'),

    publicPath: '/assets',

    filename: 'assets/scripts/[name].js',
  },
  module: {
    
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        // Adds support to load images in your CSS rules. It looks for
        // .png, .jpg, .jpeg and .gif
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // The image will be named with the original name and
              // extension
              name: '[name].[ext]',
              publicPath: '../images',

              emitFile: false,
            },
          },
        ],
      },
      // Handlebar templates
      {
        test: /\.hbs$/,
        use: [{
          loader: "handlebars-loader",
        }]
      }
    ],
  },
};
