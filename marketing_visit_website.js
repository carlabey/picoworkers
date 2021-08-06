/*
This is to crawl given website according to their need.
*/
// first page
let firstPage = "";
let siteConfig = {"startPage": "https://itblog360.com/",
                  "numberOfPagesToVisit": 8, 
                  "timePerPage": 30,
                  "postClassName": "read-more button",
                  "nextClassName": "next page-numbers" };

let postElements = document.getElementsByClassName(siteConfig.postClassName);
let nextClassName = (siteConfig.nextClassName!=="")?siteConfig.nextClassName:null;
let nextElement = nextClassName?document.getElementsByClassName(nextClassName)[0]:null;
let nextElementUrl = null;
if(nextElement){
  nextElementUrl = nextElement.href;
  console.log("Have a next element");
}else{
  console.log("Do not have next element");
}

  console.log("Next List Page", nextElementUrl);

let pages=[];
if(sessionStorage.getItem('urls')){
  pages = JSON.parse(sessionStorage.getItem('urls'));
  console.log("have ",pages.length," saved pages");
}else{
  console.log("no saved pages");
}
let pageCount = pages.length;
Array.from(postElements).every((link)=>{
  if(!pages.includes(link.href)){
    console.log("Page added to list");
    pageCount++;
    console.log(pageCount," => ", link.href);
    pages.push(link.href);
    if(pages.length===siteConfig.numberOfPagesToVisit){
      console.log("Requiered page links collected");
      console.log("Stoped collecting page links.");
      return false;
    }else{
      console.log("Need more  pages");
    }
  }else{
    console.log("Page already in the list");
  }
  return true;
});

let uniquePages = [...new Set(pages)];
let jsString = JSON.stringify(uniquePages);
sessionStorage.setItem('urls',jsString);
console.log(sessionStorage.getItem('urls'));
let savedArray= JSON.parse(sessionStorage.getItem('urls'));
console.log("=====================");
console.log(savedArray);

//visit next page
if(uniquePages.length<siteConfig.numberOfPagesToVisit){
    console.log("Page Count ", uniquePages.length, ", Required ",siteConfig.numberOfPagesToVisit," Need more pages");
    //window.location = nextElementUrl;
  console.log("Next List Page", nextElementUrl);
  //click Next button
  nextElement.click();
}else{
  console.log("Done! Collected requierd number of pages");
}

sessionStorage.removeItem('urls');
