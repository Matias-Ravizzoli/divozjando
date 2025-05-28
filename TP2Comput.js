let c = [];
let size = 10
let columnas;
let largos;
function setup() {
createCanvas(600, 400);
columnas = width/size
largos = width/size +5
for(let i = 0; i < columnas; i++ ){
  c[i] = [];
  for(let j = 0; j < largos; j++ ){
  c[i][j] = color(random(256), random(256), random(256));
  } 
}
print(c);
}


function draw() {
  background(120);
  noStroke();
  let y = 0
for(let i = 0; i < columnas; i++ ){
  for(let j = 0; j < largos; j++ ){
     fill(c[i][j]);
  rect(j*size -5,200,size,200);
  rect(i*size,y,size,200);
} }

}
function mousePressed() {
  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < largos; j++) {
      c[i][j] = color(random(256), random(256), random(256));
    }
  }
}
