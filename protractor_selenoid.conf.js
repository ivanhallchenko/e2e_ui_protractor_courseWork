const { onPrepare } = require('./src/OnPrepare');

exports.config = {
    framework: 'jasmine2',
    allScriptsTimeout: 20000,
    getPageTimeout: 20000,

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 40000,
    },

    seleniumAddress: 'http://selenium.dev-blackrockng.com:4444/wd/hub',

    multiCapabilities: [
        {
            specs: ['./src/**/*.spec.js'],
            browserName: 'chrome',
            name: 'Chrome',
            enableVNC: true,
            enableVideo: false,
            shardTestFiles: true,
            maxInstances: 1,
        },
    ],
    onPrepare
};
