const { resolve: resolvePath } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const DIST_DIR = resolvePath("dist");
const SRC_DIR = resolvePath("src");
const HTTP_PORT = process.env.HTTP_PORT || 32123;

const devServerConfig = {
    contentBase: DIST_DIR,
    historyApiFallback: true,
    port: HTTP_PORT,
};

const entryConfig = {
    main: resolvePath(SRC_DIR, "index"),
};

const outputConfig = {
    filename: "[hash].js",
    path: DIST_DIR,
    publicPath: "/",
};

const moduleConfig = {
    rules: [
        {
            test: /\.jsx?$/i,
            include: SRC_DIR,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: ["@babel/plugin-proposal-class-properties"],
                },
            },
        },
    ],
};

const pluginConfig = [
    new CleanWebpackPlugin([DIST_DIR]),
    new HtmlWebpackPlugin(),
];

const resolveConfig = {
    alias: {
        "js": SRC_DIR,
    },
    extensions: [".js", ".jsx", ".json"],
};

module.exports = {
    devServer: devServerConfig,
    entry: entryConfig,
    mode: "development",
    module: moduleConfig,
    output: outputConfig,
    plugins: pluginConfig,
    resolve: resolveConfig,
};
