
var pages=[];
if(sessionStorage.getItem('urls')){
  pages = JSON.parse(sessionStorage.getItem('urls'));console.log("test")
}else{
  console.log("no test")
}

Array.from(document.getElementsByClassName("read-more button")).forEach((plant)=>{console.log(plant.href);pages.push(plant.href)});
let uniquePages = [...new Set(pages)];
let jsString = JSON.stringify(uniquePages);
sessionStorage.setItem('urls',jsString);
console.log(sessionStorage.getItem('urls'));
let savedArray= JSON.parse(sessionStorage.getItem('urls'));
console.log("=====================");
console.log(savedArray);
