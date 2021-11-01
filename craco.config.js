const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: 'react',
      }),
    ],
  },
};
