const webpack = require('webpack');
const cssnano = require('cssnano');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

const WebpackBar = require('webpackbar');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

// config site 
const config = require('../config.site');

const hmr = new webpack.HotModuleReplacementPlugin();

// Optimize CSS assets
const optimizeCss = new OptimizeCssAssetsPlugin({
	assetNameRegExp: /\.css$/g,
	cssProcessor: cssnano,
	cssProcessorPluginOptions: {
	  preset: [
		'default',
      {
        discardComments: {
        removeAll: true,
        },
      },
	  ],
	},
	canPrint: true,
});

// Generate HTML to dist folder (folder distribution)
const paths = [];
const generateHTMLPlugins = () => glob.sync('./src/**/*.html').map((dir) => {
  const filename = path.basename(dir);

  if (filename !== '404.html') {
    paths.push(filename);
  }

  return new HTMLWebpackPlugin({
    title: config.site_name,
    filename,
    template: path.join(config.root, config.paths.src, filename),
    meta: {
      authors: config.site_authors,
      viewport: config.viewport,
      keywords: config.site_keywords,
      description: config.site_description
    },
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: false,
      removeScriptTypeAttributes: false,
      removeStyleLinkTypeAttributes: false,
      useShortDoctype: false
    },
    hash: true
  });
});

// Webpack bar
const webpackBar = new WebpackBar({
  color: '#ff6469',
});

// Clean webpack
const clean = new CleanWebpackPlugin();


// Extract CSS
const cssExtract = new MiniCssExtractPlugin({
  filename: 'style.[contenthash].css',
});

// Sitemap
const sitemap = new SitemapPlugin(config.site_url, paths, {
	priority: 1.0,
	lastmodrealtime: true,
});

// Generate robots.txt
const robots = new RobotstxtPlugin({
  sitemap: `${config.site_url}/sitemap.xml`,
  host: config.site_url,
});

// Favicons
const favicons = new WebappWebpackPlugin({
  logo: config.favicon,
  prefix: 'images/favicon',
  favicons: {
    developerName: null,
    developerURL: null,
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: false,
      coast: false,
      favicons: true,
      firefox: false,
      windows: false,
      yandex: false,
    },
  },
});

module.exports = [
  clean,
  cssExtract,
	...generateHTMLPlugins(),
  fs.existsSync(config.favicon) && favicons,
  config.env === 'production' && optimizeCss,
  config.env === 'production' && robots,
  config.env === 'production' && sitemap,
  webpackBar,
  config.env === 'development' && hmr,
].filter(Boolean);
