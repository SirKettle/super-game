/*global browser */

'use strict';

describe('E2E: Routes', function() {

	it('should have a working home route', function() {
		browser.get('#/');
		expect(browser.getLocationAbsUrl()).toMatch('/');
	});

	it('should show 404 page or nav to home', function() {
		browser.get('#/gobbledeegook');
		expect(browser.getLocationAbsUrl()).toMatch('/');
	});

});