const path = require('path');

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader'
      //   ]
      // },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      },
      // {
      //   test: /\.html$/,
      //   use: 'html-loader'
      // }
    ]
  },
  // devServer: {
  //   publicPath: "http://localhost:8080/dist/",
  //   contentBase: path.join(__dirname, '/src'),
  //   compress: true,
  //   port: 3000
  // }
};



// 1. Briefly describe what webpack is doing for us (1-3 sentences)

// Webpack is managing our whole project in several ways. It is bundling all of 
// our dependencies so that we don't need to explicitly put script tags for each
// dependency in the html. It is also helping us keep track of assets and files 
// associated with this project by keeping a source map. It also helps us separate
// private dev docs and public distribution docs that can be minified.

// 2. Briefly describe what the entry key is for in the configuration file

// The entry key is the starting point of our project, or the main application file
// where other scripts import into. Webpack starts tracing the sub-files and dependencies
// from here. In our case, the App.js is the entry point.

// 3. Briefly describe what the output key is for in the configuration file

// The output key defines the destination where we want webpack to bundle all our files.
// In our case, we want webpack to start from the entry point and run all files through loaders,
// and then compile a minified version of our project in the main.js file.

// 4. Briefly describe what a loader is and what webpack uses them for

// A loader is used to transpile or perform certain conversion operations on specific file types.
// For example, babal-loader is used to transpile ES6 code to browser-compatible ES5 code;
// css-loader is used to interpret our styles document.

// 5. Briefly describe what the test key inside a specific loader's configuration is for

// The test key inside a loader's configuration is a regular expression identifier that
// compares a file's extension to the test. If a file extension matches a certain test key,
// then the corresponding loader will be used to compile that file.




