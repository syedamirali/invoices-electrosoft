var PATH=require('path');

module.exports={
    mode:'development',
    entry:PATH.join(__dirname,'./app.js'),
    output:{
        path:PATH.join(__dirname,"public"),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                loader:'babel-loader',
                test:/\.js$/
            },
            {
                use:["style-loader","css-loader"],
                test:/\.css$/
            }
        ]
    },
    devServer:{
        contentBase: PATH.join(__dirname, 'public'),
        port:8000,
        historyApiFallback:true
    }
};