jQuery Snake
=============

##Objective
###
####
Use jQuery to create an interactive snake game. This is supposed to be a challenge so try each step to the best of your ability before looking at the code examples.

## Set up environment
### Basic file structure
####
There's a basic file structure set up for you, use this as a starting point.

  * Just like with everything you create, add a reset and normalize css file.
  * Link up your css and javascript files into your index.
  * Setup your snake.js file to load up when the document is done loading. Hint: make your javascript file `ready` for jquery
  * Test your animations file by adding a console.log, and test your css by changing a background color or something.

####
 * Your snake.js file should look something like this to start. Make sure when you load up your page you see the console.log. This tell us we're linked up correctly

 ```
 $(document).ready(function() {
   console.log(`jquery is ready`);
});
```

## Create and Initiate Game Window
### Generate Pixels
####
We need to set up a game window in which to move the snake around, and display a food block.
We're going to use a 20x20 pixel window, each pixel will be a separate div. Each div needs a different id in order to be specifically referenced by our jquery selectors when moving the snake and generating food blocks.

* Create a div in your HTML where we will add the pixels into. You can put this wherever you want on the page but you should have a set height and width that are equal to each other.

* Create a function in your snake.js file called `initiateGameWindow`. If you couldn't tell by the name we're going to put the code that initiates the game window inside this funciton.

Instead of typing out 400 divs with different ids into our html, let's let javascript do that for us. We're going to use jQuery .append to fill up our window with pixels.

 * Inside your initiateGameWindow function, create 20 rows of 20 div (with javascript/jquery). Be sure to give each div a class and a unique id that you can reference the rows and columns with later. This is an example of what a div would look like, obviously yours will have numbers for row and col:
```
<div class="cell-square" id="cell_(row#)_(column#)"></div>
```
Now your page should have 400 divs created, but they're probably invisible. We need to add some styling:
* Style your `pixels` so that they all fit into the game window you created. I would use percentages to set their width and height. You'll have to mess around with the css to get them to be stacked tight.

####
We should be able to create the html elements we want with javascript and jquery. A double for loop would do the job for us here. The outer for loop will represent and set the row numbers on our 'pixels', and the inner for loop will set the column number. We want both loops to run 20 times.

  - http://api.jquery.com/append/

####
Create a for loop with a counter `r` set equal to 0, have the loop run while `r` is less than 20, and increment `r` once every time. Then create a for loop inside of the one we just created with a counter `c` set equal to 0, have the loop run while `c` is less than 20, and increment `c` once every time.

  ```
  for (var r=0;r<20;r++){
      for (var c=0;c<20;c++){
      	$(`.game-window`).append(`<div class=cell-square id=cell_`+r+`_`+c+`></div>`);
      }
   }
   ```

This will give us the affect of adding rows and columns onto the divs we're appending. With css something along the lines of:

```
.cell-square {
 width: 5%;
 height: 5;
 background: black;
 float: left;
}
```

### Add snake cells
####
So now you have an empty game window and we need to add a snake.

To add the snake onto our screen we are just going to change the css of some of the divs we appended by adding a class to them.
* In your css file, create a 'snake-cell' class. You can make your snake look however you like, but it at least needs a background color that's different from the color of the original pixel color.
* Inside of your initiateGameWindow function after your double for loops, target the first 3 cells of the first column in your game window with jquery and add your snake cell class.

  - http://api.jquery.com/addClass/

####
We're targeting the cells by their id, which we set to have a unique row and column so we can get the ones we want.
```
$("#cell_0_0").addClass("snake-cell");
$("#cell_0_1").addClass("snake-cell");
$("#cell_0_2").addClass("snake-cell");
```

### Generate random food block
####
The game of snake involves a snake that moves around the screen eating blocks of food. Every time it eats, the snake grows longer. This means we need a function that will generate a random food block somewhere on the screen that we can call when we initiate our game window, and also every time we actually eat a food block so that it can be generated again.

* Create a class in your css file that you will put onto the food block. Just like the snake cell this can be whatever you want as long as it has a background color that is different than the original pixel color.
* Declare a global variable above your initiateGameWindow function called `food` that we will use to store the coordinates of the food block for later when we need to check if we've eaten one.
* Outside of our initiateGameWindow function, write a function called randomFood.
 * The function will create 2 random numbers between 0 and 19 inclusive representing a row and column.
 * With jquery, select the pixel that cooresponds to the random row and column you generated and add the food cell class you created onto it.
 * Set the value of food equal to the row and column coordinates following this format: `"_row#_col#"`
* Invoke your randomFood function at the end of the initiateGameWindow function.

  - http://www.w3schools.com/jsref/jsref_random.asp

####
To generate a number between 0 and 19 inclusive:
```
Math.floor(Math.random() * 19)
```
Do this twice and store the result onto variables `foodRow` and `foodColumn`. Then you can use jquery to target the pixel with the random row and column you generated and add the food cell class to it.

####
```
var foodRow = Math.floor(Math.random() * 19);
var foodCol = Math.floor(Math.random() * 19);
var foodCell = $(`#cell_`+foodRow+`_`+foodCol);
foodCell.addClass("food-cell");
food = `_` + fRow + `_` + fCol;
```
### Initiate Game Window
We've got all the pieces we need to initiate the game window. We created a div in our html that we populated with 400 pixel divs, styles those divs to fit in the window, added the snake, create a random food block generator, and have our initiateGameWindow function set to invoke the food block generator at the end. There's only one thing left to do for this step:

* Invoke initiateGameWindow
* Open your snake.html file, make sure everything worked, check for errors.

Once that's all done, we can work on animating the game.

## Animation
### Store the snake
####
Right now nothing happens in our game. Lets first get the snake to move from left to right and then worry about game rules and controlling the snake later. We need a way to store a reference which blocks are snake blocks, and how many blocks are snake blocks. An array seems fitting since we can reference specific elements and we can easily add to the end and remove from the beginning.

We know we need an array to store something, but what do we store in the array in order to make animating the snake across the screen possible? What information do we store? We need to store the coordinates of the snake in this array, starting from the head at array[0] all the way up until the last tail cell at array[array.length - 1]. At the beginning there's only 3 snake cells so lets start there.

* In the same area as your food variable, declare another global variable named `snake` which is an array. The array should contain the coordinates of the first 3 snake cells following the same format as the food block: `"_row#_col#"`

####
```
var snake = ["_0_2", "_0_1", "_0_0"];
```

### Animate the snake
####
Now our snake lives inside an array and must abide by all the rules of an array and can be manipulated like you would manipulate an array. If you break down the animation of the snake across the screen there are 2 things happening consistently 1. The very last cell of the snake (the tail cell) disappears and is removed, and then 2. Another block is added to the begining of the snake (the new head) in the direction that the user dictates. These 2 things happen simultaneously on a set interval defined by whoever makes the game. We should be able to do this with our snake living in an array.

* Create a function called update where all the rules and animations will be programmed.

We need 2 things: the tail so we can remove the snake styles from it, and the head so we can add a block to our array based on the head coordinates.
* Inside the update function create a variable called `tail` which is equal to the last element in the snake array. We also need to remove the snake-cell class from it and then remove the current tail from the array.
* Create a variable called `head`, and store the coordinates of the current head of the snake (the first index in the snake array) onto it. We're going to use this to figure out which coordinates the new head will fall on.
* From `head` we need the values of the row coordinate and the column coordinate each stored onto their respective variables `snakeRow` and `snakeCol`. There are multiple ways to do this, think about how you need to 'split' the coordinates apart in order to access them.

Now we can use these values to create a new snake head and add it to the beginning of the array. Increasing or decreasing the value of snakeRow will direct the snake up or down, while increasing or decreasing the value of snakeCol will move the snake left or right. For we want to get the snake to move from the left side to the right so we'll be adjusting snakeCol. Later on we'll add controls.
* Add a line of code that will increase `sCol` by 1 everytime update is called.
* Create a variable `newHead` that follows the format we've been using for coordinates `"_row#_col#"`. If you input the row and column values you parsed from the head along with the new incremented value of `snakeCol`, this `newHead` will be one square to the right of the original head everytime `update` is called.
* Add `newHead` to the beginning of the snake array.
* Use jquery to select the cell corresponding to the coordinates of `newHead` and add the snake-cell class we created earlier.

Finally we need to set it up so that this update function repeats itself on an interval. We can use a set timeout function to call update on an interval.
* At the bottom of the `update` function, create a setTimeout that calls `update` every 200 ms.

Last but not least:
* Invoke the update function, and watch your snake move across the screen.

  - http://www.w3schools.com/jsref/jsref_pop.asp
  - http://www.w3schools.com/jsref/jsref_split.asp
  - http://www.w3schools.com/jsref/met_win_settimeout.asp

####
The easiest way to have the last value removed from the end of the `snake` array and stored onto a variable is to use the Array.pop() method.

The easiest way to store the first element of `snake` onto `head` without removing it is to reference the first index of the `snake` array.

The easiest way to access the individual row and column values from `head` is to split the string up by the underscores and then store specific indexes of that new array onto the `snakeRow` and `snakeCol` variables.

The shorthand for increasing a variable by 1 is to add '++' after it. `snakeCol++;` will increment the value by 1.

You will need to concatenate `snakeRow` and `snakeCol` with underscores onto `newHead`.

Use Array.unshift() to add `newHead` to the beginning of `snake`.

When using jquery to select an element, the element you select it just a string, which means you can concatenate '#cell' with `newHead` to target an element matching the new coordinates.

####
Your `update` function should look something like this:
```
function update() {
    var tail = snake.pop();
    $('#cell'+tail).removeClass("snake-cell");
    var head = snake[0];
    var rowCol = head.split("_");
    var sRow = Number(rowCol[1]);
    var sCol = Number(rowCol[2]);
    sCol++;
    var newHead = "_"+sRow+"_"+sCol;
    snake.unshift(newHead);
    $('#cell'+newHead).addClass('snake-cell');
    setTimeout(update, 200);
  }
  update();
```

### Control the snake
####
Great! Now our snake moves from left to right and is totally useless. It's not a very cool game if you can't control anything, so we need to add in user interaction. Before we do anything let's figure out what we need in order to make this work.

1. We need a way to listen for and handle user input; a keypress probably.
2. We need a way to associate a specific keypress with a direction.
3. We need a way to manipulate `snakeRow` and `snakeCol` based off that direction in order to move the snake where we want it to.

Jquery makes it nice and easy to listen for events and run a function when specific events happen. Since we want the entire page to listen for an event we'll target it and listen for 'keyup'.
* Target the entire page/document with jquery and add an on keyup event listener that will run a function when the user keys up. This takes care of #1 in our list.

We need a variable that can store a direction. The value of this variable should be 1-4 which is associated with the 4 directions the snake can take.
* Create a global variable (along side the snake and food variables) named `dir` that will be used to track and store the direction the snake needs to move in.

Now we can change the value of `dir` based on which key was pressed.
* Inside the keyup event listener callback function set `dir` equal to 1 if the user pressed the down arrow, 2 if the user pressed the left arrow, 3 if the user pressed the up arrow, and 4 if the user pressed the right arrow. Now we have #2 taken care of.

All that's left is to manipulate `snakeRow` and `snakeCol` based off the direction that's been set. Manipulating `snakeRow` dictates whether the snake is going up or down; adding to `snakeRow` sends the snake down, while subtracting makes it go up. Manipulating `snakeCol` dictates whether the snake is going left or right; adding to `snakeCol` sends the snake right, while subtracting makes it go left.
* Inside the `update` function, look for the place where we hard coded `snakeCol` to increment. Replace that line with some conditionals. Based off the current value of `dir`, increment or decrement the corresponding coordinate to send the snake in the right direction.
* Test out your snake game and make sure you can control your snake in the correct direction.

  - https://api.jquery.com/keyup/
  - http://keycode.info/

####
Run through a series of if statements inside the event handler callback. Something like: if the key that was pressed has the key code of (insert key code to check for), change `dir` to the direction value that corresponds to the key which was pressed.

Then in your update function in the place where we initially were adding 1 to `snakeCol`, `snakeCol++`, replace it with conditionals that check the value of dir and based on the value (or the direction) add or subtract from the appropriate variable `snakeCol` or `snakeRow`. The easiest and cleanest way to do this is with a switch statement.

####
Keyup event handler:
```
$(document).on('keyup', function(e) {
  if(e.keyCode === 40 && dir !== 3) {
    dir = 1;
  }
  if(e.keyCode === 37 && dir !== 4) {
    dir = 2;
  }
  if(e.keyCode === 38 && dir !== 1) {
    dir = 3;
  }
  if(e.keyCode === 39 && dir !== 2) {
    dir = 4;
  }
});
```

Inside update function:
```
switch(dir){
  case 1: sRow++;  // down
  break;
  case 2: sCol--; // left
  break;
  case 3: sRow--; // up
  break;
  case 4: sCol++; // right
  break;
}
```

### Feed the snake
####
Awesome we should be able to control the snake around the window with our arrow keys, which is cool, but that's about it. It's not challenging or really that fun at all. We need to feed the snake. We want to be able to eat the food block, have our snake grow, and then generate another food block.

We need to set up a check to see if the `newHead` of the snake is landing on a food block and when it is we need to:

* Remove the food block css from the food block
* Add the tail we removed back onto the end of `snake`
* Generate another food block

####
Set up an if statement in your update function after creating the `newHead` variable that checks to see if `newHead` is equal to `food`, both of which are coordinates and will match if the snake eats the food block.

* Push the coordinates saved on the `tail` variable back onto the `snake` array.
* Remove the food cell class from the food block pixel
* Generate another food block

####
```
if(newHead === food) {
  snake.push(tail);
  $('#cell'+food).removeClass("food-cell")
  randomFood();
}
```

### Discipline the snake
####
Your snake doesn't have to go hungry anymore! Good job! But your snake also doesn't have to abide by the rules of the game, and that's not cool. No one likes a rule breaker, so lets set up some rules and consequences for breaking the rules.

The rules are simple: Don't run into the wall, and don't run into yourself. Sounds like we need another if statement.

* At the bottom of the update function before the setTimeout, write an if statement that checks to see if the row or column that `newHead` is being set to is outside the boundaries of our game window OR if the pixel that we're adding `newHead` to is already a snake cell.
  * If it is out of bounds or if it hit itself, throw up some kind of alert telling the player they lost, and stop the game.
* Make sure to set it up so that if none of these conditions are met, the new snake head is still added.

  - http://stackoverflow.com/questions/2363840/how-to-use-or-condition-in-a-javascript-if-statement
####
In the if statement check to see if `snakeCol` and `snakeRow` are greater than 19, or less than 0. If they are the snake has gone out of bounds and the player loses.

In the same if statement check to see if the cell that's going to be the new snake head has a class of snake-cell. If it does the snake ran into itself and the player loses.

####
```
if (snakeCol < 0 || snakeRow < 0 || snakeCol > 19 || snakeRow > 19 || $('#cell' + newHead).hasClass('snake-cell')) {
    console.log('You lost !');
    return;
} else {
    $('#cell' + newHead).addClass('snake-cell');
}
```

## Black Diamonds
### Game quirks and user experience
####
We should have a functional jquery snake game. But there are some things that don't quite feel right:

* Create a score counter that keeps track of the players score and displays it in the html
* The way that we coded the game there's a weird unexpected animation when the snake hits the wall. It looks like it doesn't stop at the wall, it looks like it goes into the wall. This is because the tail was removed before the check. Fix this animation.
* The game starts when the page loads up, and doesn't restart until the page is refreshed. Create a way for the user to START the game, and to restart the game when they lose. (keypress?)
* There's nothing stopping you from pressing the left arrow when your snake is going right, which will make you lose. Create a check to make sure if you're going right, you can't press left, and same with the other directions.

## Contributions
###
####
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.
