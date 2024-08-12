function setup() {
    createCanvas(600, 600);
    background ('yellow');
  } 
    
  function draw() {
  
  
   stroke('red');
   fill('green');
  
   // console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
     rect(mouseX,mouseY,25,35);
  
    }
  }