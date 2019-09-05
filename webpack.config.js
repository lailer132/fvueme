//由于 webpack 是基于Node进行构建的，所以，webpack的配置文件中，任何合法的Node代码都是支持的
var path = require('path');

// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle注入到页面底部
// 如果要配置插件，需要在导出的对象中，挂载一个plugin 节点
var htmlWebpackPlugin = require('html-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');


// 当以命令行形式运行webpack（node_modules\.bin\webpack） 或者 webpack-dev-server 的时候，工具会发现，我们并没有提供 要打包的文件的 入口 和 出口文件，此时，他会检查项目根目录中的配置文件，并读取这个文件，就拿到了导出的这个配置对象，然后根据这个对象，进行打包构建。
module.exports = {
    entry: path.join(__dirname,'./src/main.js'),// 入口文件
    output: {
        path: path.join(__dirname,'./dist'),// 输出路径
        filename:'bundle.js'// 指定输出文件的名称
    },
    plugins:[//所有webpack 配置插件的节点
        // new webpack.HotModuleReplacementPlugin(),//new 一个热更新的 模块对象，这是启用热更新的第三步。
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({//创建一个在内存中生成 HTML 页面的插件
            template: path.join(__dirname,'./src/index.html'),//指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
            filename:'index.html'// 设置生成的页面名称
        })
    ],
    module:{//这个节点，用于配置所有第三方模块加载器
        rules:[// 第三方模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},//配置处理 .css 文件的第三方规则
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=1024&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},// 配置babel来转换高级的es6语法
            { test:/\.vue$/, use: 'vue-loader' }
        ]
    },
    resolve:{
        alias:{
            // "vue$":"vue/dist/vue.js"
        }
    }
}