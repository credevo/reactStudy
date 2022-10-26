const path  = require('path');

module.exports = {
    mode : 'development',
    module : {
        rules : [
            {
                test : /\.css$/i,
                use : ["style-loader", "css-loader"]
            }
        ]
    },
    devServer : {
        port : 8000,
        static : {
            directory : path.join(__dirname,'public')
        }
    },
    resolve : {
        alias : {
            components : path.resolve(__dirname,'src/components/'),
        }
    }
}