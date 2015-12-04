var assert = require('cucumber-assert');

module.exports = function() {

	this.Given(/^we are looking at the guinea pig website$/, function (callback) {
	    this.browser
	  	    .url('https://saucelabs.com/test/guinea-pig')
            .call(callback);
	});

	this.When(/^I populate the email field$/, function (callback) {
        this.browser
            .setValue('#fbemail', 'abc@email.com')
            .call(callback);
	});

	this.Then(/^it should contain the value I entered$/, function (callback) {
        this.browser
            .getValue('#fbemail').then(function(value) {
                assert.equal('abc@email.com', value, callback, "Assertion Failed");
                })
            .call(callback);
	});
};