function myfun1() {
    const y = Number(document.getElementById("f1").value);
    if ((y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0)) {
         alert(y + ' is a leap year');
    } else {
        alert(y + ' is not a leap');
    }
}

function myfun2() {
    let a1 = [2, 0, 3, 3, 4];
    let a2 = [3, 4, 6, 6, 3, 1];
    let s = [];
    for (i = 0; i < a2.length; i++) {
        if (a1[i] != null && a2[i] != null) {
            var sres = a1[i] + a2[i];

        } else if (a2[i] == null && a1[i] != null) {
            sres = a1[i];
        } else if (a1[i] == null && a2[i] !== null) {
            sres = a2[i];

        }
        s.push(sres);

    }
    alert(s);
}
function myfun3(){
let a1 = [7, 8, 5, 3];
let a2 = [3, 5, 4, 1];
let product = [];

for (let i = 0; i < a1.length; i++) {
    a = a1[i] * a2[i];
    product.push(a);

}
alert(product);
}

function myfun4(){
let a1 = [1, 2, 3, 4];
let a2 = [2, 3, 4, 5];
let sum = [];
for (let i = 0; i < a1.length; i++) {
    b = a1[i] + a2[i];
    sum.push(b);

}
alert(sum);
}