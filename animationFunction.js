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

// ---copy paste code to use:


animtemplate(
	start=from[i],
	end=to[i],
	iteration=i,
	html=from[i].html,
	time=1,
	delay=0.1*i,
	tension=20,
	friction=10,
	velocity=10,
	control='animation1.start()',
	scaleX=1,
	scaleY=1
	)

//---
