const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const path = require("path");

const nextConfig = {
    webpack: (config) => {

        config.resolve.alias["components"] = path.join(__dirname, "components");
        config.resolve.alias["containers"] = path.join(__dirname, "containers");
        return config;
    }
};

module.exports = withPlugins(
    [withSass, withImages, withCss],
    nextConfig
);

module.exports = {
    /* Add Your Scss File Folder Path Here */
    webpack5: false,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}