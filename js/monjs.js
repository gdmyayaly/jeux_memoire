 var premier=document.getElementById('premier');
// var second=document.getElementById('second');
// var troisieme=document.getElementById('troisieme');
// var premier=document.getElementById('premier');
// var premier=document.getElementById('premier');
// var premier=document.getElementById('premier');
// var premier=document.getElementById('premier');
// var premier=document.getElementById('premier');
// var premier=document.getElementById('premier');
// var premier=document.getElementById('premier');
// var premier=document.getElementById('premier');
// var premier=document.getElementById('premier');
var premier;
var second;
var troisieme;
var quatrieme;
var cinquieme;
var sixieme;
var septieme;
var huitieme;
var neuvieme;
var dixieme;
var onzieme;
var douzieme;
var allblock0=["premier","second","troisieme","quatrieme","cinquieme","sixieme"];
var allblock1=["septieme","huitieme","neuvieme","dixieme","onzieme","douzieme"];
//var allimage=["1.png","2.png","3.png","4.png","5.png","6.png"];
var lastchoix=null;
var newchoix=null;
var lastdonner=null;
var tableau=[];
loadimage();
function choix(donner){
    var good=document.getElementById("img"+donner);
    var id=good.getAttribute("data-id");
    console.log(id);
    good.src=id;
    if (newchoix) {
        lastchoix=document.getElementById("img"+donner).getAttribute("src");
        if (newchoix==lastchoix) {
            document.getElementById(donner).style.backgroundColor="blue";
            document.getElementById(lastdonner).style.backgroundColor="blue";
            lastchoix=null;
            newchoix=null;
        }
        else{
            lastchoix=null;
            document.getElementById(lastdonner).style.backgroundColor="red";
            newchoix=null;
            document.getElementById("img"+donner).src="images/brain.png";
            console.log(document.getElementById("img"+donner));
            
        }
    }
    else{
        newchoix=document.getElementById("img"+donner).getAttribute("src");
        document.getElementById(donner).style.backgroundColor="blue";
        lastdonner=donner;
    }
}

function loadimage(){
        tableau=randomdata();
        for (let index = 0; index < allblock0.length; index++) {
            let a="img"+allblock0[index];
            let nbr=tableau[index];
            document.getElementById(a).dataset.id="images/"+nbr+".png";
        }  
        tableau=randomdata();
        for (let index = 0; index < allblock1.length; index++) {
            let a="img"+allblock1[index];
            let nbr=tableau[index];
            document.getElementById(a).dataset.id="images/"+nbr+".png";
        }          

}
function randomdata(){
    var arr = [];
while(arr.length < 6){
    var r = Math.floor(Math.random() * 6) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
return arr;
}