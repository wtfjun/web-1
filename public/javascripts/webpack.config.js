 var config = {
   entry: './main.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
   module: {
      loaders: [ 
         {test: /\.css$/, loader: 'style!css'},
         {test: /\.woff/, loader : 'file'},
         {test: /\.ttf/, loader : 'file'}, 
         {test: /\.eot/, loader : 'file'}, 
         {test: /\.svg/, loader : 'file'},
         {test: /\.less$/, loader: 'style!css!less'},
         {test: /\.(png|jpg|gif)$/, loader: 'url-loader'},
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
			
            query: {
              presets: ['es2015', 'react']
            }
         }
      ]
   },
   
   watch: true
	
}

module.exports = config;