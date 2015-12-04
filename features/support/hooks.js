var webdriverio = require('webdriverio');
var SauceLabs = require('saucelabs');

var myHooks = function () {

    this.Before(function (scenario) {
        this.browser = webdriverio.remote({
        desiredCapabilities: {
        platform: "OS X 10.10",
        browserName: "chrome",
        version: "45.0"
        },
        host: 'ondemand.saucelabs.com',
        port: 80,
        user : process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        logLevel: "silent"
        }).init();
    });


    this.After(function (scenario, callback) {
        var sauceAccount = new SauceLabs({
            username: process.env.SAUCE_USERNAME,
            password: process.env.SAUCE_ACCESS_KEY,
            public: true
        });

        var result = !scenario.isFailed();

        var status = {
            passed: result,
            name: scenario.getName()
        }

        var sessionId = this.browser.session().requestHandler.sessionID;

        this.browser
            .end()
            .then(callback);

        sauceAccount.updateJob(sessionId, status, callback);
    });
};

module.exports = myHooks;

