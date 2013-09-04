/*!

Name: Character Countdown
Dependencies: jQuery
Author: Michael Lynch
Author URL: http://michaelynch.com
Date Created: August 29, 2013
Licensed under the MIT license

*/
;(function(a){a.fn.characterCountdown=function(c){if(!this.length){return this;}var f={countdownTarget:".countdown",maxChars:140};var e=this;var d=a(this);e.settings={};e.settings=a.extend({},f,c);var b=function(){var h=a(d).val().length;var g=e.settings.maxChars-h;if(g>0){d.siblings(e.settings.countdownTarget).removeClass("max");d.siblings(e.settings.countdownTarget).text(g);}else{d.siblings(e.settings.countdownTarget).text(0).addClass("max");}};b();a(d).attr("maxlength",e.settings.maxChars);a(d).keyup(function(g){b();});};})(jQuery);