/**
First parameter - test suite name
Second parameter - function (function will have all tests (it blocks)
*/
describe('Protractor baby steps',function()
		{
			it('Open Angular js website',function(){
				browser.waitForAngularEnabled(false);
				browser.get("http://google.com");
				browser.get('http://juliemr.github.io/protractor-demo/');
				// write yout raw protractor code
			    element(by.model('first')).sendKeys(1);
			    element(by.model('second')).sendKeys(2);

			    element(by.id('gobutton')).click();

			    expect(element(by.binding('latest')).getText()).toEqual('3'); // This is wrong!
			    
			    //expect(element(by.binding('latest')).getText()).toBe('3'); // This is wrong!
			    //element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			    //console.log(text);	
			    //})
			    browser.sleep(3000);
			    
				
			})

			it('close browswer', function() {
			// code to close browser
				
			})
		})
		
