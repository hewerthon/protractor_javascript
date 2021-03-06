/**
First parameter - test suite name
Second parameter - function (function will have all tests (it blocks)
*/
describe('Actions demo',function()
{
	it('Open Posse website',function()
	{
		browser.get('http://posse.com');
		
		//browser.actions().maximize(protractor.maximize()).perform();
		
		element(by.model('userInputQuery')).sendKeys("river");
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
	    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
	    {
			browser.sleep(3000);
			expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
			element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
			element(by.css("a[ng-href*='London/River Island'")).click().then(function()
			{
				browser.getAllWindowHandles().then(function(handles)
				{
					browser.switchTo().window(handles[1]);
					browser.getTitle().then(function(title){
						console.log(title + " title of the page after switching");
					})
				});
				browser.sleep(5000);
			});
		});
			    
	});
	// code to close browser
	it('close browswer', function() {
	});
});
		
