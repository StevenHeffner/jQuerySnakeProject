jQuery Snake
=============

##Objective
Use jQuery to create an interactive snake game. This is supposed to be a challenge so there will be minimal code provided.

##Step 1: Set up environment
There's a basic file structure set up for you, use this as a starting point.

  * Like with everything you create, add a reset and normalize css file.
  * Link up your css and javascript files into your index.
  * Setup your animations file to load up when everything else is done loading. Hint: make your javascript file 'ready' for jquery ;)
  * Test your animations file by adding a console.log, and test your css by changing a background color or something.

##Step 2: Initiate A Game Window
We need to set up a game window in which to move the snake around, and display a food block.
We're going to use a 20x20 pixel game window, each pixel will be a separate div, then each div needs a different id in order to be specifically referenced by our jquery selectors when moving the snake and generating food blocks.

* Instead of typing out 400 divs with different ids into our html, lets let javascript do that for us. Create 1 div in your html with a class of game-window
```
for (var r=0;r<20;r++){
      for (var c=0;c<20;c++){
      	gameWindow.append('<div class=cellSquare id=cell_'+r+'_'+c+'></div>');
      }
    }
```

## Contributions
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

