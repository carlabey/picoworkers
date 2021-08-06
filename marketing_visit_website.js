/*
This is to crawl given website according to their need.
*/
// first page
let firstPage = "";
let siteConfig = {"startPage": "https://itblog360.com/",
                  "numberOfPagesToVisit": 10, 
                  "timePerPage": 30,
                  "postClassName": "read-more button",
                  "nextClassName": "next page-numbers" };

let postElements = document.getElementsByClassName(siteConfig.postClassName);
let nextElement = (siteConfig.nextClassName!=="")?siteConfig.nextClassName:null;
if(nextElement){
  console.log("Have a next element");
}else{
  console.log("Do not have next element");
}

let pages=[];
if(sessionStorage.getItem('urls')){
  pages = JSON.parse(sessionStorage.getItem('urls'));console.log("have saved pages");
}else{
  console.log("no saved pages");
}

Array.from(postElements).forEach((plant)=>{console.log(plant.href);pages.push(plant.href)});
let uniquePages = [...new Set(pages)];
let jsString = JSON.stringify(uniquePages);
sessionStorage.setItem('urls',jsString);
console.log(sessionStorage.getItem('urls'));
let savedArray= JSON.parse(sessionStorage.getItem('urls'));
console.log("=====================");
console.log(savedArray);
