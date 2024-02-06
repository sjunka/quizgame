// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);
// getDefaultConfig.resolver.assetExts.push('cjs');

module.exports = config;
