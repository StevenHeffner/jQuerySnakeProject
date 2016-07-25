jQuery Snake
=============

##Objective
Use jQuery to create an interactive snake game. This is supposed to be a challenge so there will be minimal code provided.

## Set up environment
### Basic file structure
#### 
There's a basic file structure set up for you, use this as a starting point.

  * Just like with everything you create, add a reset and normalize css file.
  * Link up your css and javascript files into your index.
  * Setup your snake.js file to load up when the document is done loading. Hint: make your javascript file 'ready' for jquery
  * Test your animations file by adding a console.log, and test your css by changing a background color or something.

####
 * Your snake.js file should look something like this to start. Make sure when you load up your page you see the console.log. This tell us we're linked up correctly
 
 ```
 $(document).ready(function() {
   console.log('jquery is ready');
});
```

## Create and Initiate Game Window
### Generate Pixels
####
We need to set up a game window in which to move the snake around, and display a food block.
We're going to use a 20x20 pixel window, each pixel will be a separate div. Each div needs a different id in order to be specifically referenced by our jquery selectors when moving the snake and generating food blocks.

* Create a div in your HTML where we will add the pixels into. You can put this wherever you want on the page but you should have a set height and width that are equal to each other.
 
* Create a function in your snake.js file called 'initiateGameWindow'. If you couldn't tell by the name we're going to put the code that initiates the game window inside this funciton.

Instead of typing out 400 divs with different ids into our html, let's let javascript do that for us. We're going to use jQuery .append to fill up our window with pixels.

 * Inside your initiateGameWindow function, create 20 rows of 20 div (with javascript/jquery). Be sure to give each div a class and a unique id that you can reference the rows and columns with later. This is an example of what a div would look like, obviously yours will have numbers for row and col:
```
<div class="cell-square" id="cell_(row#)_(column#)"></div>
```
Now your page should have 400 divs created, but they're probably invisible. We need to add some styling:
* Style your 'pixels' so that they all fit into the game window you created. I would use percentages to set their width and height. You'll have to mess around with the css to get them to be stacked tight.

####
We should be able to create the html elements we want with javascript and jquery. A double for loop would do the job for us here. The outter for loop will represent and set the row numbers on our 'pixels', and the inner for loop will set the column number. We want both loops to run 20 times.

  http://api.jquery.com/append/
  
####
Create a for loop with a counter 'r' set equal to 0, have the loop run while 'r' is less than 20, and increment 'r' once everytime. Then create a for loop inside of the one we just created with a counter 'c' set equal to 0, have the loop run while 'c' is less than 20, and increment 'c' once everytime.

  ```
  for (var r=0;r<20;r++){
      for (var c=0;c<20;c++){
      	$('.game-window').append('<div class=cell-square id=cell_'+r+'_'+c+'></div>');
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
 
http://api.jquery.com/addClass/

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
* Outside of our initiateGameWindow function, write a function called randomFood.
 * The function will create 2 random numbers between 0 and 19 inclusive representing a row and column.
 * With jquery, select the pixel that cooresponds to the random row and column you generated and add the food cell class you created onto it.
* Invoke your randomFood function at the end of the initiateGameWindow function.
 
http://www.w3schools.com/jsref/jsref_random.asp

####
To generate a number between 0 and 19 inclusive:
```
Math.floor(Math.random() * 19)
```
Do this twice and store the answer onto variables 'foodRow' and 'foodColumn'. Then you can use jquery to target the pixel with the random row and column you generated and add the food cell class to it.

####
```
var foodRow = Math.floor(Math.random() * 19);
var foodCol = Math.floor(Math.random() * 19);
var foodCell = $('#cell_'+foodRow+'_'+foodCol);
foodCell.addClass("food-cell");
```
### Initiate Game Window
We've got all the pieces we need to initiate the game window. We created a div in our html that we populated with 400 pixel divs, styles those divs to fit in the window, added the snake, create a random food block generator, and have our initiateGameWindow function set to invoke the food block generator at the end. There's only one thing left to do for this step:

* Invoke initiateGameWindow
* Open your snake.html file, make sure everything worked, check for errors.

Once that's all done, we can work on animating the game.

## Animate the snake





 


 


## Contributions
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

