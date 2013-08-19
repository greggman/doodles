Various Random Doodles
======================

Faces
---------------------------------------------

Just a few types of eyes, eyebrows and mouths can generate many expressions

http://greggman.github.com/doodles/faces.html

Fork
----

Playing around with a forking structure.

http://greggman.github.com/doodles/fork.html

Tree
----

Generating a simple tree.

http://greggman.github.com/doodles/tree.html

Tree-Color
----------

Same as tree but each level is a different color.

http://greggman.github.com/doodles/tree-color.html

Missile-Command
---------------

Written to demonstrate how the original Missile Command was created.

Most games today erase the entire display every frame.  Back when Missile
Command was created machines were not fast enough to draw the entire
display in pixels at 60 frames per second.  So, Missile Command never
erases the display.  Missiles or Bombs are just a line drawing function
drawing the lead pixel and then erasing that lead pixel with a trail
pixel.  This leaves the trail drawing only 2 pixels per frame per
bomb/missile.  To erase the trail the line is draw again with black.

The explosions similarly only draw the outer edge of the circle.  Because
nothing is erased the circle expands.  To clear the explosion black
circles are drawn in the opposite direction.

These techniques make the game fast even on the 1mhz machine it was
originally written on.  They also give some of Missile Command's
distinctive looks like when two explosions overlap one will start erasing
the other leaving crescent shapes. In this case though I'm using
HTML5's Canvas arc function to draw the circle. The original Missile
Command likely used a 1 pixel thick function to draw the circle.
Unfortunately HTML5 Canvas has no way to draw circles exactly 1 pixel
thick. I could implement my own circle function but I was too lazy.

The glowing colors were achieved back in the 80s by color cycling or
rather the system could only display 4 colors but you could choose
which 4 colors. By changing 1 of the 4 colors every frame to a different
color you'd get a glowing color "for free". Almost zero work on the part
of the processor. Systems today with their 24bit color displays can't
really do color cycling. To simulate color cycling requires re-drawing
every pixel that changes color either directly or through various GPU
techniques. Since Missile Command only really needs 1 glowing color
I achieve the glow by changing the background color of the canvas every
frame and filling it with opaque black. I draw the tips of the missiles
and the explosions by setting pixels to 0,0,0,0. This makes them show
the through to the background color. Since it's changing every frame
I get "free" glowing similar to the color cycling technique from the 80s.

http://greggman.github.com/doodles/missile-command.html

Spirograph
----------

Inspired by Spirograph toys.

http://greggman.github.com/doodles/spirograph.html

Circles
-------

Inspired by an exhibit I saw about
<a href="http://en.wikipedia.org/wiki/Marcel_Duchamp">Marcel Duchamp</a>
at the Moderna Museet in Stockholm.

http://greggman.github.com/doodles/circles.html

