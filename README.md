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

##Step 2: Create Game Window
We need to set up a game window in which to move the snake around, and display a food block.
We're going to use a 20x20 pixel window, each pixel will be a separate div. Each div needs a different id in order to be specifically referenced by our jquery selectors when moving the snake and generating food blocks.

* Create a div in your HTML where we will add the pixels into. You can put this wherever you want on the page but you should have a set height and width that are equal to each other.

Instead of typing out 400 divs with different ids into our html, let's let javascript do that for us. We're going to use jQuery .append to fill up our window with pixels.

 * Create 20 rows of 20 div (with javascript). Be sure to give each div a class and a unique id that you can reference the rows and columns with later. This is an example of what a div would look like, obviously yours will have numbers for row and col:
```
<div class="cell-square" id="cell_??row??_??col??"></div>
```
Now your page should have 400 divs created, but probably invisible. We need to add some styling
* Style your 'pixels' divs so that they all fit into the game window you created. I would use percentages to set their width and height. You'll have to mess around with the css to get them to be stacked tight.

## Contributions
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

