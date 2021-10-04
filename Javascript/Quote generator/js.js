var ar=["\"All you need in this life is ignorance and confidence; then success is sure.\"","\"Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all\"",
"\“Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.\”",
"\"Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got\""]
var h=document.getElementById("g");

var at=["~Mark twain","~Life","~Harish","~Alexander"]


h.addEventListener('click',clr)


function clr(){
    
    var i=Math.floor(Math.random()*ar.length);
    document.getElementById("quote").innerText=ar[i];
    document.getElementById("author").innerText=at[i];

}
