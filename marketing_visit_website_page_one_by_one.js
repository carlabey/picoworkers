// ==UserScript==
// @name         picoworkers-marketing-website-visit
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  try to take over the world!
// @author       You
// @exclude      https://itblog360.com
// @match        https://itblog360.com/*
// @grant        none
// @require     https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

(function() {
    //'use strict';

    //activity log.
    function log(message){
       console.log(message);
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }


    log("loaded");

    //refresh the page every X minutes.
    /**var min = 1000*60*5;
    var max = 1000*60*8;

    var timeOut = getRndInteger(min,max);
    log("reload in "+ timeOut+ " seconds");
    setTimeout(function(){
        log("reload");
      window.location.reload(1);
    },timeOut);*/




    //Begin Configurations--------------

let siteConfig = {"startPage": "https://itblog360.com/",
                  "numberOfPagesToVisit": 2,
                  "timePerPage": 25,
                  "postClassName": "read-more button",
                  "nextSelector": "#nav-below > div > span.prev > a" ,
                 };
let nextPageLink = document.querySelector("#nav-below > div > span.prev > a");

//End Configurations---------------



//Begin Functions-----------------
let savePageData = () =>{
  let pages=[];
  if(sessionStorage.getItem('urls')){
    pages = JSON.parse(sessionStorage.getItem('urls'));
    console.log("have ",pages.length," saved pages");
  }else{
    console.log("no saved pages");
  }

  pages.push(decodeURI(window.location.href));
  let uniquePages = [...new Set(pages)];
  let jsString = JSON.stringify(uniquePages);
  sessionStorage.setItem('urls',jsString);
};

let goToNext = function(){
  let pages = JSON.parse(sessionStorage.getItem('urls'));
  let req = siteConfig.numberOfPagesToVisit;
  let completed = pages.length;
  if(pages.length === siteConfig.numberOfPagesToVisit){
  console.log(req," requiered pages collected.");
  console.log("Exit process.");
    alert("Done!");
  }else{
  console.log("need ",(req-completed)," more pages");
  nextPageLink.click();
  }
};

//End Funcitons-------------------

//Begin Process-------------------

//End Process---------------------

savePageData();

    //stay x minutes in page
var min = 1000*siteConfig.timePerPage;
var max = 1000*siteConfig.timePerPage+10;

var timeOut = getRndInteger(min,max);
log("reload in "+ timeOut+ " miliseconds");
setTimeout(goToNext,timeOut);

//scroll down
/**
window.scroll({
 top: 0,
 left: 0,
 behavior: 'smooth'
});
*/

//scroll
//botttom
let scrollBottom = ()=> {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};
//top
let scrollTop = () =>{
  window.scrollTo({top: 0, behavior: 'smooth'});
};

//to next link
let scrollNextLink = () =>{
  //nextPageLink.scrollIntoView({behavior: "smooth"});
  document.querySelector("#nav-below > div > span.prev > a").scrollIntoView({behavior: "smooth"});
};

document.querySelector("#nav-below > div > span.prev > a").scrollIntoView({behavior: "smooth"});
setTimeout(scrollBottom,3000);
setTimeout(scrollTop,3000);
setTimeout(document.querySelector("#nav-below > div > span.prev > a").scrollIntoView({behavior: "smooth"}),3000);


})();
