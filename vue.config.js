module.exports = {
  configureWebpack (config) {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(require('./purgecss.plugin'));
    }
  },
};
