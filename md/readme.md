##编译jsx,es6

    npm i babel-loader @babel/core @babel/preset-env  @babel/plugin-transform-runtime   @babel/preset-react --save-dev
    
    npm i @babel/polyfill @babel/runtime
    
* @babel/core
    >babel核心
* @babel/preset-env
    >编译ES6
* @babel/preset-react
    >转换JSX
* @babel/plugin-transform-runtime
    >避免 polyfill污染全局变量，减小打包体积
* @babel/polyfill:                    
    >ES6 内置方法和函数转化垫片

##typescript

    npm install --save-dev typescript awesome-typescript-loader source-map-loader
    
* awesome-typescript-loader                      
    >awesome-typescript-loader
* source-map-loader                 
    >编译ES6
