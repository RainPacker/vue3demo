// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack
const jsdom = require('jsdom')
const webpackConfig = require('../../build/webpack/webpack.test.conf')

module.exports = function (config) {
  config.set({
    basePath: '',
    browsers: ['jsdom'],
    jsdomLauncher: {
      jsdom: {
        resources: new jsdom.ResourceLoader({
          userAgent:
            'BBM/6.7.8Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1InBrowserDebug AplusKit/1.2.0.0',
        }),
      },
    },
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      dir: './coverage',
      reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }],
    },
    frameworks: ['jasmine', 'sinon-chai'],
    files: ['./index.js'],
    exclude: [],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap'],
    },
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only',
    },
  })
}
