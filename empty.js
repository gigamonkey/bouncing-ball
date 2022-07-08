// Change these to change the physics of our world.
const bounceSpeed = 12.2;
const gravity = 0.17;
const ballSize = 15;

// The framework will draw the background for us.
// It also provides two functions:
//
// drawShadow(size, darkness) - draws an elliptical shadow
// on the ground below the ball at the given size and darkness.
//
// drawBall(height, size) - draws the ball at the given 
// height and size.

// Implement this in terms of drawShadow(), drawBall() and the
// functions below. May also need to define a variable to keep
// track of time.
const drawFrame = () => {};

// Compute the height in pixels at time t after the ball hit the ground
const height = (t) => 0;

// Compute the shade of the shadow. 0 is black; 255 is white.
const shadowDarkness = (h) => 0;

// Compute the size of the shadow.
const shadowSize = (h) => 0;

// Call the animate function from the framework.
animate(drawFrame);