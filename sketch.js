function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    stroke("blue");
    fill("purple");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 5, 5);
    }
  }