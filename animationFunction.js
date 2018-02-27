var animtemplate;

animtemplate = function(layer1, layer2, iteration, html, time, delay, tension, friction, velocity, animControl, scaleX, scaleY) {
  var animation1;
  animation1 = new Animation(layer1, {
    html: html,
    x: layer2.x,
    y: layer2.y,
    opacity: layer2.opacity,
    scaleX: scaleX,
    scaleY: scaleY,
    options: {
      time: time,
      delay: delay,
      curve: Spring({
        tension: tension,
        friction: friction,
        velocity: velocity
      })
    }
  });
  console.log(animation1);
  return eval(animControl);
};
