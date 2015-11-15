# TargetOptions
Expand the HTML <a> Target attribute and give you a new option called  _options. 

Sometime, users are filling long forms or reading a long document/website with lot of links
and sometimes you dont want to click on that links because you will loose the actual page you are reading or filling,
so, why dont give the user the posibility to choose between open the link in a new tab, in the same window or in an iframe.

So you can use it like : <a target="_blank | _self | _parent | _top | _options" >

//Normal usage:

//Normal links
<a href="http://website.com" target="_blank">Check this code</a>

// Target Options
<a href="http://website.com" target="_options">Check this code</a>
