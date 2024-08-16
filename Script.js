
//This Script Redirects from Blog A to Blog B's search page.
//Used to redirect to search, if 404 pages are present.

var Getlastpart = window.location.href.split('/').pop();//Get the last part of the URL of Blog/Site A.
var Nohyphen = Getlastpart.split('-').join(' '));//Here the Blogger URL's are hyphenated. we remove it  and change to space instead.
var Noext = Nohyphen.split('.html')[0];//the last part of the Blogger blogs are .html and can be changed accordingly.
var Searchterm = Noext;//Simply copies to new variable.
window.location.replace("https://yourblog-URL.blogspot.com/search?q="+Searchterm);//Here the url should be replaced with your blogger url.
//Here note that the bvlogger uses search?q= pattern replace it depending upon the platform.


//CODE without any variables
/*

window.location.replace("https://yourblog-URL.blogspot.com/search?q="+window.location.href.split('/').pop().split('-').join(' ').split('.html')[0]);

*/
