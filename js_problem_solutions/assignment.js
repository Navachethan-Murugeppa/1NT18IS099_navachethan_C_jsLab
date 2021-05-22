

function maketable()
{
row = Number(prompt("Input number of rows"));
column = Number(prompt("Input number of columns"));
  
 for(var r=0;r<parseInt(row,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(column,10);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c; 
    }
   }
}

btn = document.getElementById("btn")
btn.addEventListener('click',() => {
   i = document.getElementById("img1");

   if(i.src.match("r1.jpg")){
      i.src = "r3.jpg";
   }
});

btn1 = document.getElementById("btn1");
btn1.addEventListener('click', () =>{
   p = document.getElementById("img1");
   p.src = "r1.jpg";
});

txt = document.getElementById("btn3");
txt.addEventListener('click', () => {
   txt=document.getElementById("txt1");
   txt.style.color = "red";
});

btn4 = document.getElementById("btn4");
btn4.addEventListener('click', () =>{
 bt4 = document.getElementById("txt1");
 bt4.style.fontSize = "18px";
});

btn5 = document.getElementById("btn5");
btn5.addEventListener('click', () =>{
 bt5 = document.getElementById("txt1");
 bt5.style.fontFamily = "Comic Sans MS";
});

function getname(){
   var s1 = document.getElementById("i1").value;
   var s2 = document.getElementById("i2").value;
   document.getElementById("f1").innerHTML = s1+""+s2;
} 
