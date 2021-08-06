//Begin Configurations--------------

let siteConfig = {"startPage": "https://itblog360.com/",
                  "numberOfPagesToVisit": 2, 
                  "timePerPage": 5000,
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

  pages.push(window.location.href);
  let uniquePages = [...new Set(pages)];
  let jsString = JSON.stringify(uniquePages);
  sessionStorage.setItem('urls',jsString);
  
};

let goToNext = function(){
  pages = JSON.parse(sessionStorage.getItem('urls'));
  if(pages.length === siteConfig.numberOfPagesToVisit){
  console.log("requiered pages collected.");
  console.log("Exit process.");
    alert("Done!");
  }else{
  console.log("need more pages");
  nextPageLink.click();
  }
  
};

//End Funcitons-------------------

//Begin Process-------------------

//End Process---------------------

savePageData();


setTimeout(goToNext,siteConfig.timePerPage);

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




//stay x minutes in page




