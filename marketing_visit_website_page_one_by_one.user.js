// ==UserScript==
// @name         picoworkers-marketing-website-visit
// @namespace    http://tampermonkey.net/
// @version      1.0.2
// @description  This is to make picoworkers jobs easy!
// @author       carlabey
// @match        http://prevention.beritahu.co.ids/*
// @exclude      http://prevention.beritahu.co.id/
// @grant        none
// @downloadURL  https://github.com/carlabey/picoworkers/raw/main/marketing_visit_website_page_one_by_one.user.js
// @updateURL    https://github.com/carlabey/picoworkers/raw/main/marketing_visit_website_page_one_by_one.user.js
// @require     https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

(function() {
    //'use strict';
    //Begin Configurations--------------
let numberOfPagesToVisit = 10;
let timePerPage = 25;
let nextPageSelector = "footer > nav > div > div.nav-previous >a";

let siteConfig = {
                  "numberOfPagesToVisit": numberOfPagesToVisit,
                  "timePerPage": timePerPage,
                  "postClassName": "read-more button",
                  "nextSelector": "#nav-below > div > span.prev > a" ,
                 };
let nextPageLink = document.querySelector(nextPageSelector);
//End Configurations---------------
    
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








//Begin Functions-----------------
let savePageData = () =>{
  let pages=[];
  if(sessionStorage.getItem('urls')){
    pages = JSON.parse(sessionStorage.getItem('urls'));
    console.log("have ",pages.length,"/",numberOfPagesToVisit," saved pages");
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
  pages.forEach((v)=>{console.log(v)})
  alert("Done!");
  }else{
  console.log("need ",(req-completed)," more pages");
  nextPageLink.click();
  }
};

//End Funcitons-------------------

//Begin Process-------------------
if(nextPageLink){
 console.log("Have a next page link");
}else{
  console.log("======NO NEXT PAGE LINK!!!=====");
}


//End Process---------------------

savePageData();

    //stay x minutes in page
var min = 1000*siteConfig.timePerPage;
var max = 1000*(siteConfig.timePerPage+8);

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
