outerloop: // This is the label name
for (let i = 0; i < 5; i++) { i=1
console.log("Outerloop: " + i); 1
innerloop:
for (let j = 0; j < 5; j++){ j=3
if (j > 3 ) break ; // Quit the innermost loop
if (i == 2) break innerloop; // Do the same thing
if (i == 4) break outerloop; // Quit the outer loop
console.log("Innerloop: " + j); 3
}
}
