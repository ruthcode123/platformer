
let hero = new Hero()
let keyPressed = {}

ERASE()
hero.draw()

// setup a function to run whenever a key is pressed
window.addEventListener("keydown", event => {
 keyPressed[event.code]= true
})
window.addEventListener("keyup", event => {
 keyPressed[event.code]= false
})

function loop(){
   if(keyPressed["ArrowUp"]) {
    hero.moveUp()
   }
  if(keyPressed ["ArrowDown"]) {
    hero.moveDown()
  }
  if(keyPressed ["ArrowLeft"]) {
    hero.moveLeft() 
  }
  if(keyPressed["ArrowRight"]) {
    hero.moveRight()
  }
  ERASE()
  hero.draw()

  setTimeout(loop,1000/60)
}
loop()









