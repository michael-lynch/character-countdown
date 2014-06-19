#Character Countdown

A simple, lightweight jQuery plugin to display a countdown of the remaining characters eligible in a textarea.

<a href="http://michael-lynch.github.io/character-countdown/" target="_blank">See a demo</a>

##Instructions

Include jQuery and the plugin in the head or footer of your page. 

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

<script src="/js/plugins/characterCountdown.js"></script>
```
    
Create a textarea and a sibling element with the class of "countdown."

```html
<textarea></textarea>

<div class="countdown"></div>
```
	
Initialize the plugin targeting the class or ID of the textarea or the textarea itself.

```js
$('textarea').characterCountdown();
```
	
When the countdown has reached it's limit, the class "max" will be added to the countdown element so you can style the countdown any way you'd like.

```html
<div class="countdown max"></div>
```

####Options

<ol>

<li>countdownTarget: "id / class / element"
<br />A string that defines the class, ID or element that will display the countdown (default: '.countdown').
</li>

<li>maxChars: value
<br />An integer that defines the maximum amount of characters (default: 140).
</li>

</ol>

#####Example

```js
$(function() {

	$('textarea').characterCountdown({
		countdownTarget: '.my-countdown',
		maxChars: 300
	});

});
```