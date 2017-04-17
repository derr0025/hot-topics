/*global $, console*/
$(document).ready(function () {
    
    "use strict";
    
    var contents,
    url,
    nm,
    em,
    sb,
    ms,
    dt,
    errors,
    collect,
    i;
    
    contents = {};
   
    //Use load method to load the home.html into index.html
    $(".bg-main .box").load("./partials/home.html", function (rsp) {
        contents["./partials/home.html"] = rsp;
    
        console.log(contents);
    });
    
    
    // handle your navbar links on click event
    $(".bg-header a").on();
});