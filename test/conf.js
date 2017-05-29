var jasmineReporters = require('jasmine-reporters');

exports.config = {

  framework: 'jasmine2',
 	specs: ['../test/homePageEnd2EndTest.js', '../test/calculatePriceEnd2End.js'],
  	capabilities: {
  		browserName: 'chrome',
  		'chromeOptions': {
    		'args': ['--disable-extensions']
  		}
	},

	onPrepare: function(){

		//Generates XML Report
		var junitReporter = new jasmineReporters.JUnitXmlReporter({
    		savePath: '../testReport'
		});
		//Create an report after executing the script
		jasmine.getEnv().addReporter(junitReporter);
		
	}

}
