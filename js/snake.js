//jquery here:

$(document).ready(function() {

  var food
  var snake = ['_0_2', '_0_1', '_0_0'];
  var dir = 4
  var foodsEaten = 0
  console.log(foodsEaten)
  
  // document.getElementById('num').innerHTML = foodsEaten;
  

  gameOver = () => {
    alert('You Lose')
    location.reload()
  }
  randomFood = () =>{
    let c = Math.floor(Math.random() * 19)
    let r = Math.floor(Math.random() * 19)
    let foodCell = $(`#cell_${r}_${c}`)
    foodCell.addClass('food');
    food = `_${r}_${c}`
  }
  initiateGameWindow = () => {
    for(var r = 0; r < 20; r++ ){
      for(var c = 0; c < 20; c++){
        $(".game-window").append(`<div class=cell-square id=cell_${r}_${c}></div>`)
      }
    }
    $('#cell_0_0').addClass('snake-cell');
    $('#cell_0_1').addClass('snake-cell');
    $('#cell_0_2').addClass('snake-cell');
    randomFood()
  }
  update = () => {
    let head = snake[0]
    let sRow = head.split('_')[1]
    let sCol = head.split('_')[2]
    let tail = snake.pop()
    if(dir === 2) sCol = +sCol - 1
    if(dir === 4) sCol = +sCol + 1
    if(dir === 1) sRow = +sRow + 1
    if(dir === 3) sRow = +sRow - 1



    let newHead = `_${sRow}_${sCol}`
    snake.unshift(newHead)
    if(newHead === food){
      foodsEaten++
      console.log(foodsEaten)
      $(`#cell${food}`).removeClass('food')
      snake.push(tail)
      randomFood()
    }
    $(`#cell${tail}`).removeClass('snake-cell')

    if(sCol < 0 || sRow < 0 || sCol > 19 || sRow > 19 || $('#cell' + newHead).hasClass('snake-cell')) gameOver()
  
    $(`#cell${newHead}`).addClass('snake-cell')

    setTimeout(() => update(), 200)
  }
  $('*').keyup((event) => {
    let key = event.originalEvent.key
    if(key === "ArrowDown" && dir !== 3) dir = 1
    if(key === "ArrowUp" && dir !== 1) dir = 3
    if(key === "ArrowLeft" && dir !== 4) dir = 2
    if(key === "ArrowRight" && dir !== 2) dir = 4
    if(key === " "){
      location.reload()
    }
  })   
   

    





    


  
  
  initiateGameWindow()
  update()
console.log('food',food)

})

