#resolve
* extensions 导入包时可以不带.js等后缀
#externals
    externals: {
      react: 'React'
    }
* 不会将node-modules里面的react模块打包进bundle里面，而是在runtime时从外部获取(CDN)
