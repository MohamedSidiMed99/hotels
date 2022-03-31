let header =document.getElementById("header");
let home =document.getElementById("home");
let dest =document.getElementById("dest");

let x1 =document.getElementById("x1");
let x2 =document.getElementById("x2");
let x3 =document.getElementById("x3");

let lex =document.getElementById("lex").getElementsByClassName("row");
let y1 =document.getElementById("y1");
let y2 =document.getElementById("y2");


let call =document.getElementById("call");
let call2 =document.getElementById("call2");

window.sr=ScrollReveal();
sr.reveal(header,{
   duration:800,
   origin:'bottom',
   distance:'-200px'
});
window.sr=ScrollReveal();
sr.reveal(home,{
   duration:800,
   origin:'bottom',
   distance:'-200px'
});
window.sr=ScrollReveal();
sr.reveal(dest,{
   duration:800,
   origin:'left',
   distance:'-100px'
});

window.sr=ScrollReveal();
sr.reveal(x1,{
   duration:800,
   origin:'right',
   distance:'-100px'
});
window.sr=ScrollReveal();
sr.reveal(x2,{
   duration:800,
   origin:'bottom',
   distance:'-50px'
});
window.sr=ScrollReveal();
sr.reveal(x3,{
   duration:800,
   origin:'left',
   distance:'-100px'
});


for(let i = 0 ; i <lex.length ; i++)
{
    console.log(lex.length);
 
     
    window.sr=ScrollReveal();
sr.reveal(y1,{
   duration:800,
   origin:'left',
   distance:'-100px'
});
   
  
}

window.sr=ScrollReveal();
sr.reveal(call2,{
   duration:800,
   origin:'left',
   distance:'-100px'
});

window.sr=ScrollReveal();
sr.reveal(call,{
   duration:800,
   origin:'right',
   distance:'-100px'
});
