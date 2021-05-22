function numfun(){
    let x = Number(prompt("Enter a number"));
    document.getElementById("a1").innerHTML = x.toString();
    document.getElementById("a2").innerHTML = (x+2).toString();
}

function numfun2(){
    let y = Number(prompt("Enter a number"));
    document.getElementById("a3").innerHTML = y.toExponential();
    document.getElementById("a4").innerHTML = y.toExponential(2);
    document.getElementById("a5").innerHTML = y.toExponential(4);
}

function numfun3(){
    let z = Number(prompt("Enter a number"));
    document.getElementById("a6").innerHTML = z.toFixed(0);
    document.getElementById("a7").innerHTML = z.toFixed(2);
    document.getElementById("a8").innerHTML = z.toFixed(4);
}

function numfun4(){
    let za = Number(prompt("Enter a number"));
    document.getElementById("a9").innerHTML = za.toPrecision();
    document.getElementById("a10").innerHTML = za.toPrecision(2);
    document.getElementById("a11").innerHTML = za.toPrecision(4);
}

function numfun5(){
    const x = Number(prompt("Enter a number"));
    document.getElementById("a12").innerHTML = x.valueOf();
    document.getElementById("a13").innerHTML = (x+2).valueOf();
}

function numfun6(){
    const y = Number(prompt("Enter a number"));
    document.getElementById("a14").innerHTML = parseInt(y);
}

function numfun7(){
    const z = Number(prompt("Enter a number"));
    document.getElementById("a15").innerHTML = parseFloat(z);
   
}

function numfun8(){
    const xz = Number(prompt("Enter a number"));
    document.getElementById("a16").innerHTML = Number(xz);
}

function mathfun(){
   let  a  = Math.PI;
   document.getElementById("ans1").value = a; 
}

function mathfun2(){
    var a = Number( document.getElementById("f1").value);
   var b= Math.round(a);
    document.getElementById("ans2").value = b; 
}

function mathfun3(){
    let c = Number( document.getElementById("f2").value);
   let d= Math.ceil(c);
    document.getElementById("ans3").value = d; 
}

function mathfun4(){
    let e = Number( document.getElementById("f3").value);
   let f= Math.floor(e);
    document.getElementById("ans4").value = f; 
}

function mathfun5(){
    var g = Number( document.getElementById("f4").value);
   var h= Math.trunc(g);
    document.getElementById("ans5").value = h; 
}

function mathfun6(){
    var i = Number( document.getElementById("f5").value);
   var j= Math.sign(i);
    document.getElementById("ans6").value = j; 
}

function mathfun7(){
    let k = Number( document.getElementById("f6").value);
    let k1 = Number(document.getElementById("f61").value);
   let l= Math.pow(k,k1);
    document.getElementById("ans7").value = l; 
}

function mathfun8(){
    let m = Number( document.getElementById("f7").value);
   let n= Math.sqrt(m);
    document.getElementById("ans8").value = n; 
}

function mathfun9(){
    var o = Number( document.getElementById("f8").value);
   var p= Math.abs(o);
    document.getElementById("ans9").value = p; 
}

function mathfun10(){
    var q = Number( document.getElementById("f9").value);
   var r= Math.sin(q);
    document.getElementById("ans10").value = r; 
}

function mathfun11(){
    let s = Number( document.getElementById("f10").value);
   let t= Math.cos(s);
    document.getElementById("ans11").value = t; 
}

function mathfun12(){
   var v= Math.random();
    document.getElementById("ans12").value = v; 
}

function mathfun13(){
    var w = Number( document.getElementById("f12").value);
    var w1 = Number( document.getElementById("f121").value);
   var x= Math.min(w,w1);
    document.getElementById("ans13").value = x; 
}

function mathfun14(){
    let y = Number( document.getElementById("f13").value);
    let y1 = Number( document.getElementById("f131").value);
   let z= Math.max(y,y1);
    document.getElementById("ans14").value = z; 
}

function mathfun15(){
    let ab = Number( document.getElementById("f14").value);
   let cd= Math.log(ab);
    document.getElementById("ans15").value = cd; 
}