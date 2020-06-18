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
                presets:[
                    "env", "react", 
                ]
            }}
        ]
    }
}