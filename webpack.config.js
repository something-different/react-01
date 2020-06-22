const path=require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
    mode:'production',
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:"index.html"
        }),
    ],
    module:{
        rules:[
            { test:/\.js|jsx$/,loaders:'babel-loader',exclude:/node_modules/,options:{
                presets:["env", "react",]
            }},
            {test:/\.css$/,loader:['style-loader','css-loader?modules']}//modules只有在css-loader才能用，启动模块化
        ]
    },
    resolve:{
        alias:{
            '@':path.join(__dirname,'./src')//这样的话，@表示项目根目录中src这一路径
        }
    }
}