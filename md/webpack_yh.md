#webpack优化
### 1.分离runtimeChunk

    runtimeChunk: {
       name: entrypoint => `runtime-${entrypoint.name}`,
    },
    
### 2.分离公共模块(react、antd等)

    cacheGroups: {
        vendor: {
            priority: 1,
            test: /node_modules/,
            chunks: 'initial',
            name:'vendor-chunk',
            minSize: 0,
            minChunks: 1
        }
    }

### 3.分离代码(js、css)

     mini-css-extract-plugin
     {
         test: /\.css$/,
         use: [MiniCssExtractPlugin.loader, 'css-loader']
     }
     
     new MiniCssExtractPlugin({
         filename: 'static/css/[name].css1',// 分离后的文件名
         chunkFilename: '[id].css',
         ignoreOrder: false
     }),
     
### 4.压缩css
    
    
### 5.chunks
async：表示从动态导入模块开始拆分
initial：表示从入口文件拆分，如果多个入口文件同时引入一个文件，则单独拆分出来

