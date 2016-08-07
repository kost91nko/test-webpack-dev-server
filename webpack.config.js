var path = require("path");

module.exports = {
    resolve: {
        modulesDirectories: ["node_modules"]
    },
    entry: {
        app: ["./main.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
        { 
            test: /\.css$/, 
            loaders: ["style", "css"] 
        }
     ]

    },
    devtool: 'source-map'
};