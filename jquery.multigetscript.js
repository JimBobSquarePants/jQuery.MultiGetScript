/*!
* jQuery MultiGetScript Plugin v1.0.0
* https://github.com/JimBobSquarePants/jQuery.MultGetScript
* Copyright 2012, James South
* Released under the MIT license
* http://jquery.org/license
*
*/
/*It is recommended that this file is minified before serving.*/

/*global jQuery*/
/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, jquery:true, indent:4, maxerr:50 */
(function ($) {

    "use strict";

    /**
    * Multiple parallel getScript with caching.
    * 
    * @param {Array|String} url (one or more URLs)
    * @param callback fn (oncomplete, optional)
    * @returns {function}
    */
    $.getCachedScript = function (url, callback) {

        // Normalise type
        if (!$.isArray(url)) {
            url = [url];
        }

        $.when.apply(null, $.map(url, function (val) {

            $.ajax({
                dataType: "script",
                cache: true,
                url: val
            });

        })).done(function () {
            if (callback && typeof callback === "function") {
                callback();
            }
        });
    };

}(jQuery));


(function ($) {

    "use strict";

    // Save the original version. 
    var getScript = $.getScript;


    /**
    * Multiple parallel getScript.
    * 
    * @param {Array|String} url (one or more URLs)
    * @param callback fn (oncomplete, optional)
    * @returns {function}
    */
    $.getScript = function (url, callback) {

        // Normalise type
        if (!$.isArray(url)) {
            url = [url];
        }

        $.when.apply(null, $.map(url, getScript)).done(function () {
            if (callback && typeof callback === "function") {
                callback();
            }
        });
    };

}(jQuery));