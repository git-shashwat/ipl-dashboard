var path = require('path');

var root = path.join(__dirname);

var config = {
    rootDir:                root,
    // Targets ========================================================
    serveDir:               path.join(root, '/app/public'),
    distDir:                path.join(root, 'dist'),
    clientManifestFile:     'manifest.webpack.json',
    clientStatsFile:        'stats.webpack.json',

    // Source Directory ===============================================
    srcDir:                 path.join(root, 'app'),
    srcServerDir:           path.join(root, 'server'),

    // HTML Layout ====================================================
    srcHtmlLayout:          path.join(root, 'app/public', 'index.html'),

    // Site Config ====================================================
    siteTitle:              'atlan IPL',
    siteDescription:        'Built for Vipul',
    siteCannonicalUrl:      'http://localhost:4100',
    siteKeywords:           'react cricket',
    scssIncludes:           []
}

module.exports = config;