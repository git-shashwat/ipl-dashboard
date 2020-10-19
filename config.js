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
    srcServerDir:           path.join(root, 'functions'),

    // HTML Layout ====================================================
    srcHtmlLayout:          path.join(root, 'app/public', 'index.html'),

    // Site Config ====================================================
    siteTitle:              'atlan IPL',
    siteDescription:        'Built for Vipul',
    siteCannonicalUrl:      'https://atlan-task-d55a8.web.app/',
    siteKeywords:           'react cricket',
    scssIncludes:           []
}

module.exports = config;