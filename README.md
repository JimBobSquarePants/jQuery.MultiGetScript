jQuery.MultGetScript
====================

A series of jQuery plugins that allows the downloading of multiple JavaScript requests with a single call. 

Features
--------

* Allows the downloading of multiple JavaScript requests with a single call.
* Downloaded scripts can be cached.

Dependencies
------------

* jQuery v1.7.0 (or higher).

Usage
-----
    // Single url; cached script.
	$.getCachedScript(url, function(){ // callback });

	// Multiple urls; cached script.
	// Note the array as the first parameter.
	$.getCachedScript([url1, url2], function(){ // callback });


    // Single url; non-cached script. Same as standard $.getScript.
	$.getScript(url, function(){ // callback });

	// Multiple urls; non-cached script.
	// Note the array as the first parameter.
	$.getScript([url1, url2], function(){ // callback });
