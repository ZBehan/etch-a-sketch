# Etch-a-sketch
This is another project for The Odin Project (www.theodinproject.com).

## Objective
To build a browser version of an Etch-a-sketch. 
Allow the user to select from three colour options: black, random colour mode, and a shading mode.

## What did I learn?
I continued to build on thinking about the solution prior to doing any coding. This involved creating comments of the problems that I needed to solve. I then broke those problems down into smaller problems until I thought they were small enough that I could write a line of code.

I originally created a grid that attached an event listener to every cell. By doing some research, I found that I was able to attach a single event listener to the grids parent div. This meant that there was a small saving in the amount of resources used by the app.

Regex was used to create the shading mode. Regex made it possible to easily split out the invidual RGB values for whichever cell was being targeted. www.freecodecamp.com is a good resource for learning regex.

## Features that could be added
1. Add a colour picker to the solid colour option.
2. User clicks on a cell and then moves the cursor to start drawing. This will allow the user to start drawing in the middle without creating a line from the edge.
3. Remove the grid size prompt and add a slider. This will allow the 'clear' button to only be used for clearing the grid.
4. Fix the thickness of the cell borders.