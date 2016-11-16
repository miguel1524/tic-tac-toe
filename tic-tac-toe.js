// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function makeShape(){
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 50)
  circle.setAttribute("cy", 50)
  circle.setAttribute("r", 40)
  circle.setAttribute("fill","white")
  canvas.appendChild(circle)
}
function makeCircle(){
  var canvas = document.getElementById("game-board")
  var shapes = document.createElementNS(namespace, "circle")
  shapes.setAttribute("cx", 150)
  shapes.setAttribute("cy", 50)
  shapes.setAttribute("r", 40)
  shapes.setAttribute("fill","white")
  canvas.appendChild(shapes)
}
function makeThing(){
  var canvas = document.getElementById("game-board")
  var things = document.createElementNS(namespace, "circle")
  things.setAttribute("cx", 250)
  things.setAttribute("cy", 50)
  things.setAttribute("r", 40)
  things.setAttribute("fill","white")
  canvas.appendChild(things)
}
function makeAnything(){
  var canvas = document.getElementById("game-board")
  var anythings = document.createElementNS(namespace, "circle")
  anythings.setAttribute("cx", 250)
  anythings.setAttribute("cy", 150)
  anythings.setAttribute("r", 40)
  anythings.setAttribute("fill","white")
  canvas.appendChild(anythings)
}
function makeStars(){
  var canvas = document.getElementById("game-board")
  var star = document.createElementNS(namespace, "circle")
  star.setAttribute("cx", 150)
  star.setAttribute("cy", 150)
  star.setAttribute("r", 40)
  star.setAttribute("fill","white")
  canvas.appendChild(star)
}
function makeGame(){
  var canvas = document.getElementById("game-board")
  var games = document.createElementNS(namespace, "circle")
  games.setAttribute("cx", 50)
  games.setAttribute("cy", 150)
  games.setAttribute("r", 40)
  games.setAttribute("fill","white")
  canvas.appendChild(games)
}
function makeBoards(){
  var canvas = document.getElementById("game-board")
  var board = document.createElementNS(namespace, "circle")
  board.setAttribute("cx", 250)
  board.setAttribute("cy", 250)
  board.setAttribute("r", 40)
  board.setAttribute("fill","white")
  canvas.appendChild(board)
}
function makeFood(){
  var canvas = document.getElementById("game-board")
  var foods = document.createElementNS(namespace, "circle")
  foods.setAttribute("cx", 150)
  foods.setAttribute("cy", 250)
  foods.setAttribute("r", 40)
  foods.setAttribute("fill","white")
  canvas.appendChild(foods)
}
function makePizza(){
  var canvas = document.getElementById("game-board")
  var pizzas = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 50)
  circle.setAttribute("cy", 250)
  circle.setAttribute("r", 40)
  circle.setAttribute("fill","white")
  canvas.appendChild(circle)
}
