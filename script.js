// Change these to change the physics of our world.
const bounceSpeed = 1.0;
const gravity = 0.002;
const ballSize = 15;

// The framework will draw the background for us. It also provides two
// functions:
//
// drawShadow(size, darkness) - draws an elliptical shadow on the ground below
// the ball at the given size and darkness.
//
// drawBall(height, size) - draws the ball at the given height and size.

let start = performance.now();

const drawFrame = (time) => {
  let h = height(time - start);
  drawShadow(shadowSize(h), shadowDarkness(h));
  drawBall(h, ballSize);
  if (h <= 0) {
    start = time;
    //bounceSpeed *= 0.90;
  }
};

// Ball gets instantly accelerated to bounceSpeed when it bounces but gravity
// accelerates it downward a bit at every tick. So the height at time t after a
// bounce is t times it's velocity at that instant.
const height = (t) => Math.max(0, t * (bounceSpeed - gravity * t/2));

// The higher we are, the lighter the shadow.
const shadowDarkness = (h) => 148 + 1.015 ** h;

// The higher we are, the bigger the shadow.
const shadowSize = (h) => 0.1 * (h + ballSize) + ballSize / 2;

// Call the animate function from the framework.
animate(drawFrame);
