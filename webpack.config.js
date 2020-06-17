const path=require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
//创建一个插件的实例对象
const htmlPlugin =new HtmlWebPackPlugin({
    template:path.join(__dirname,'./src/index.html'),//源文件
    filename:'index.html'
})

//向外暴露打包的配置对象
//webpack默认只能打包处理.js后缀类型的文件；vue  png 无法处理
module.exports={
    mode:'production',//development production(发布)
    //在webpack4.x中约定大于配置，约定默认打包入口文件路径是src->index.js
    //不用写entry
    plugins:[
        htmlPlugin
    ],
    model:{//所有第三方模块匹配规则
        rules:[
            {test:/\.js | jsx$/,use:'babel-loader',exclude:/node_modules/}//一定要添加exclude
        ]
    }
}