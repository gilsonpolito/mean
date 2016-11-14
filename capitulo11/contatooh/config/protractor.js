exports.config = {
	specs: ['../test/e2e/**/*.js'],
	onPrepare: function() {
		browser.driver.get('http://localhost:3000').then(function(){
			browser.driver.findElement(by.id('entrar')).click();
			browser.driver.findElement(by.id('login_field')).sendKeys('xxxxxx');
			browser.driver.findElement(by.id('password')).sendKeys('xxxxxx');
			browser.driver.findElement(by.name('commit')).click();
		});
	}
};