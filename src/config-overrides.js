const path = require('path');
module.exports = {
    paths: function (paths, env) {
        // Changing public to static
        paths.appPublic = path.resolve(__dirname, 'electron');
        paths.appHtml = path.resolve(__dirname, 'electron/index.html');
        return paths;
    }
}