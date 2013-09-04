/*!

Name: Character Countdown
Dependencies: jQuery
Author: Michael Lynch
Author URL: http://michaelynch.com
Date Created: August 29, 2013
Licensed under the MIT license

*/

;(function($) {

    $.fn.characterCountdown = function(options) {
    
    	//return if no element was bound
		//so chained events can continue
		if(!this.length) { 
			return this; 
		}

		//define default parameters
        var defaults = {
        	countdownTarget: '.countdown',
        	maxChars: 140
        }

        //define plugin
        var plugin = this;

        //define element
        var el = $(this);

        //define defaults and options
        plugin.settings = {}
 
        //merge settings
        plugin.settings = $.extend({}, defaults, options);
        
        var getRemainingCharacters = function() {
        
        	//define current number of characters
        	var currentCount = $(el).val().length;
        	
        	//subtract current number of characters from max amount of characters
        	var remainingCharacters = plugin.settings.maxChars - currentCount;
        	
        	//if remaining characters is greater than -1
        	if(remainingCharacters > 0) {
        	
        		el.siblings(plugin.settings.countdownTarget).removeClass('max');
        
	        	//set the number of remaining characters
        		el.siblings(plugin.settings.countdownTarget).text(remainingCharacters);
        	
        	} else {
        	
        		//set remaining characters to 0 and color them red
        		el.siblings(plugin.settings.countdownTarget).text(0).addClass('max');
	        	
        	}
	        
        };
        
        getRemainingCharacters();
        
        //set max length on input
        $(el).attr('maxlength', plugin.settings.maxChars);
        
        //on each key stroke
        $(el).keyup(function(e) {
        
        	getRemainingCharacters();
        	     
        });

    }

})(jQuery);