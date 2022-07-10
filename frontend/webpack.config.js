const path = require('path');

module.exports = {
  entry: path.resolve(__dirname,'src','index.js'),
  output:{
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer:{
    static: path.resolve(__dirname, 'public'),
    port:3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use:[
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use:{
            loader: 'file-loader',
        }
      }
    ]
  },
};
