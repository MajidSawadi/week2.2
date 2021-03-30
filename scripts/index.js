console.log('Hello JS!')
function chnageText (){
 document.getElementById('change-text').innerHTML = 'i changed it!'
}

setTimeout(chnageText, 3000);
let count = 0
function incrementer(){
    count ++;
    document.getElementById('change-count').innerHTML=count;
}
setInterval(incrementer, 1000)

var i = 0;
function change() {
  var doc = document.getElementById("change-color");
  var color = ["blue", "brown", "green"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 3000)

function clickcount(){
    i++
    
    document.getElementById("change-click").innerHTML = i;

}
document.addEventListener('click', clickcount)
let hvr=0;
function mousHover(){
    
   
    document.getElementById("change-hover").innerHTML = hvr;
    hvr++

}
document.addEventListener("mouseover", mousHover)

document.addEventListener('click', clickcount)
 let lovMe=0;
function textChange(){
    lovMe++
    if (lovMe%2){
        document.getElementById("change-he-loves-me").innerHTML = "she  loves me ";
        
    }
    else{
        document.getElementById("change-he-loves-me").innerHTML = "she does not love ";
    }
    
   

}
document.addEventListener("click", textChange)

function dattii(){
    const d =new Date();
    document.getElementById("change-to-current-date").innerHTML=d;
}
document.addEventListener("click", dattii)
function reportSize() {
    const width = window.innerWidth;
    document.getElementById("change-to-current-width").innerHTML =
      "Width: " + width;
    const height = window.innerHeight;
    document.getElementById("change-to-current-height").innerHTML =
      "Height: " + height;
  }
  
  window.onresize = reportSize;
  let listLength = 1;
  document.getElementById("add-list-item").addEventListener("click", () => {
    listLength++;
    var para = document.createElement("li");
    var node = document.createTextNode(
      "This is a new li element number " + listLength
    );
    para.appendChild(node);
  
    var element = document.getElementById("add-list-item");
    element.appendChild(para);
  });
  
  function showUrl(){
      document.getElementById("change-to-url").innerHTML="www.url.come"
  }
  document.addEventListener("click", showUrl)

  document.getElementById('signin-button').addEventListener('click', () => {
    document.getElementById('signin-form').style.display = "none";
    document.getElementById('signout-form').style.display = "block";
})

document.getElementById('signout-button').addEventListener('click', () => {
    document.getElementById('signin-form').style.display = "block";
    document.getElementById('signout-form').style.display = "none";
})