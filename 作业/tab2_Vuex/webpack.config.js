const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const {CleanWebpackPlugin}=require("clean-webpack-plugin");
const VueLoaderPlugin=require("vue-loader/lib/plugin");

//定义入口文件和出口文件
//app和build是key值，可以随意写
const PATH = {
    app:path.join(__dirname,"./src/index.js"),
    build:path.join(__dirname,"./dist"),
    chunkFilename: '[name].min.js'
}

//配置webpack
module.exports={
    //配置开发环境
    mode:"development",
    //入口文件的配置
    //key值app是随意写的
    entry:{
        app:PATH.app
    },

    //出口文件的配置
    output:{
        //打包好的文件名称叫什么
        filename:"[name].js", //这里的name就是entry中key值

        //存放打包好的文件的路径
        path:PATH.build
    },
    //专门用来使用插件
    plugins:[
        new HtmlWebpackPlugin({
            //打包后的文件名称
            filename:"index.html",
            //模板文件的路径
            template:"./public/index.html",
            title:"Tab2"
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],

    //路径和别名的配置
    resolve:{
        //优先引入哪个后缀的文件
        extensions:[".vue",".js",".css "],

        //别名的配置
        alias:{
            "@":path.join(__dirname,"./src/"),
            "@components":path.join(__dirname,"./src/components"),
        }
    },
    //编译
    module:{
        rules:[
            {
                //处理以.js为结尾的文件，通过babel-loader进行编译
                test:/\.(js|jsx)$/,
                loader:"babel-loader"//当里面有一个loader时用loader
            },
            {
                test:/\.(css|scss)$/,
                //从右到左 从下到上
                use:["style-loader","css-loader","sass-loader"] //当里面有多个loader时用use
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        //当打包的文件超过2048kb的时候就会自动使用flie-loader进行打包
                        limit:2048,
                        name:"image/[name].[ext]"
                    }
                }
            },
            {
                //处理字体图标
                test:/\.(svg|eot|ttf|woff|woff2)$/,
                use:{
                    loader:"file-loader",
                    options:{
                        //将字体图标放在iconfont文件夹
                        //[name]：文件名称
                        //[ext]：文件的后缀名
                        name:"iconfont/[name].[ext]"
                    }
                }
            },
            {
                test:/\.vue$/,
                loader:"vue-loader"
            }
        ]
    },
    devServer:{
        port:9000,
        open:true,
        proxy:{
            /*"/ajax":{
                //代理的目标服务器
                target:"http://m.maoyan.com",
                changeOrigin:true
            },*/
            "/msite":{
                target:"https://h5.ele.me/",
                changeOrigin:true
            },
            "/details":{
                target:"http://app.xiaomi.com",
                changeOrigin:true
            },
            "/i":{
                target:"http://meishi.meituan.com",
                changeOrigin:true
            },
            "/ajax":{
                target:"https://www.vip.com",
                changeOrigin:true
            },
            "/napi":{
                target:"https://www.duitang.com",
                changeOrigin:true
            },
            "/proxy":{
                target:"http://mobile.yangkeduo.com",
                changeOrigin:true
            },
            "/api":{
                target:"https://m.piaoniu.com",
                changeOrigin:true
            }
        }
    }
    
}