#Character Countdown

A simple, lightweight jQuery plugin to display a countdown of the remaining characters eligible in a textarea.

<a href="http://michael-lynch.github.io/character-countdown/" target="_blank">See a demo</a>

##Instructions

Include jQuery and the plugin in the head or footer of your page. 

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    
    <script src="/js/plugins/characterCountdown.js"></script>
    
Create a textarea and a div or span with an ID to display the countdown.

    <textarea></textarea>
    
    <div id="countdown"></div>
	
Initialize the plugin targeting the class or ID of the textarea or the textarea itself.

	$('textarea').characterCountdown();

####Options

<ol>

<li>countdownTarget: "id"
<br />A string that defines the ID of the element that will display the countdown (default: 'countdown').
</li>

<li>maxChars: value
<br />An integer that defines the maximum amount of characters (default: 140).
</li>

</ol>

#####Example

	$(function() {
	
		$('textarea').characterCountdown({
			countdownTarget: 'my-countdown',
			maxChars: 300
		});
	
	});