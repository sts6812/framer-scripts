require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Path":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.Path = (function(superClass) {
  var animate, animating, animations, bezier, close, path, point, points, quadratic;

  extend(Path, superClass);

  path = [];

  animating = [];

  point = [];

  animate = [];

  quadratic = [];

  bezier = [];

  close = [];

  animations = points = 0;

  function Path(options) {
    var pathBegin, pathEnd, svgEnd, svgStart;
    options = _.defaults(options, this.pointVisible = this.handleVisible = false, this.pointSize = 4, this.handleSize = 2, this.strokeWidth = 1, this.pointColor = this.handleColor = this.strokeColor = "white", this.fill, this.path = {
      animationOptions: {
        time: 1,
        curve: "bezier-curve"
      },
      draggable: false,
      point: (function(_this) {
        return function(p) {
          var cx, cy, i, j, obj, ref;
          point[points] = new Layer({
            name: "Point #" + points,
            backgroundColor: _this.pointColor,
            superLayer: _this,
            width: _this.pointSize,
            height: _this.pointSize,
            borderRadius: _this.pointSize / 2,
            x: p.x - _this.pointSize / 2,
            y: p.y - _this.pointSize / 2
          });
          animate[points] = new Animation;
          if (_this.pointVisible === false) {
            point[points].opacity = 0;
          }
          if (_this.path.draggable === true) {
            point[points].draggable = true;
          }
          if (p.quadratic === "first" || p.bezier === "first" || p.bezier === "second") {
            point[points].name = "Point #" + points + " (handle)";
            point[points].backgroundColor = _this.handleColor;
            point[points].width = _this.handleSize;
            point[points].height = _this.handleSize;
            if (_this.handleVisible === false) {
              point[points].opacity = 0;
            }
          }
          if (p.states !== void 0) {
            animations = points;
            if (Array.isArray(p.states.x) && Array.isArray(p.states.y)) {
              for (i = j = 0, ref = p.states.x.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
                cx = p.states.x;
                cy = p.states.y;
                point[points].states.add((
                  obj = {},
                  obj["array " + i] = {
                    x: cx[i],
                    y: cy[i]
                  },
                  obj
                ));
              }
            }
            if (Array.isArray(p.states.x) === false && Array.isArray(p.states.y) === false) {
              point[points].states.add({
                second: {
                  x: p.states.x,
                  y: p.states.y
                }
              });
              animate[points] = new Animation({
                layer: point[points],
                properties: {
                  x: p.states.x,
                  y: p.states.y
                },
                time: _this.path.animationOptions.time,
                curve: _this.path.animationOptions.curve
              });
            }
            if (Array.isArray(p.states.x) && Array.isArray(p.states.y) === false) {
              print("Y values are not an array");
            }
            if (Array.isArray(p.states.x) === false && Array.isArray(p.states.y)) {
              print("X values are not an array");
            }
            point[points].states.animationOptions = _this.path.animationOptions;
          }
          if (p.quadratic === void 0 && p.bezier !== "first") {
            quadratic[points] = false;
            bezier[points] = false;
            if (p.close === true) {
              path.push('L' + p.x);
              close[points] = true;
            } else {
              path.push(p.x);
            }
          }
          if (p.quadratic === "first") {
            bezier[points] = false;
            quadratic[points] = true;
            path.push('Q' + p.x);
          }
          if (p.bezier === "first") {
            quadratic[points] = false;
            bezier[points] = true;
            path.push('C' + p.x);
          }
          path.push(p.y);
          _this.html = svgStart + pathBegin + path + pathEnd + svgEnd;
          return points++;
        };
      })(this),
      animate: (function(_this) {
        return function(t) {
          var execute, i, j, k, ref, ref1, results;
          for (i = j = 0, ref = point.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
            if (t === void 0 || t === "states") {
              point[i].states.next();
            } else {
              animate[i].start();
            }
            execute = function() {
              var c, k, ref1;
              for (i = k = 0, ref1 = point.length; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
                c = i + i;
                animating[c] = point[i].x + _this.pointSize / 2;
                if (quadratic[i] === true) {
                  animating[c] = "Q" + animating[c];
                }
                if (bezier[i] === true) {
                  animating[c] = "C" + animating[c];
                }
                if (close[i] === true) {
                  animating[c] = "L" + animating[c];
                }
                animating[c + 1] = point[i].y + _this.pointSize / 2;
              }
              return _this.html = svgStart + pathBegin + animating + pathEnd + svgEnd;
            };
          }
          results = [];
          for (i = k = 0, ref1 = point.length; 0 <= ref1 ? k < ref1 : k > ref1; i = 0 <= ref1 ? ++k : --k) {
            results.push(point[i].on('change:point', function() {
              return execute();
            }));
          }
          return results;
        };
      })(this),
      quadratic: (function(_this) {
        return function(p) {
          var handle, quadraticPoint;
          if (p.states !== void 0) {
            handle = {
              x: p.x,
              y: p.y,
              states: {
                x: p.states.x,
                y: p.states.y
              },
              quadratic: "first"
            };
            quadraticPoint = {
              x: p.qx,
              y: p.qy,
              states: {
                x: p.states.qx,
                y: p.states.qy
              }
            };
          } else {
            handle = {
              x: p.x,
              y: p.y,
              quadratic: "first"
            };
            quadraticPoint = {
              x: p.qx,
              y: p.qy
            };
          }
          _this.path.point(handle);
          return _this.path.point(quadraticPoint);
        };
      })(this),
      cubic: (function(_this) {
        return function(p) {
          var bezierPoint, handleOne, handleTwo;
          if (p.states !== void 0) {
            handleOne = {
              x: p.cx1,
              y: p.cy1,
              states: {
                x: p.states.cx1,
                y: p.states.cy1
              },
              bezier: "first"
            };
            handleTwo = {
              x: p.cx2,
              y: p.cy2,
              states: {
                x: p.states.cx2,
                y: p.states.cy2
              },
              bezier: "second"
            };
            bezierPoint = {
              x: p.x,
              y: p.y,
              states: {
                x: p.states.x,
                y: p.states.y
              }
            };
          } else {
            handleOne = {
              x: p.cx1,
              y: p.cy1,
              bezier: "first"
            };
            handleTwo = {
              x: p.cx2,
              y: p.cy2,
              bezier: "second"
            };
            bezierPoint = {
              x: p.x,
              y: p.y
            };
          }
          _this.path.point(handleOne);
          _this.path.point(handleTwo);
          return _this.path.point(bezierPoint);
        };
      })(this),
      close: (function(_this) {
        return function(p) {
          p.close = true;
          return _this.path.point(p);
        };
      })(this)
    });
    Path.__super__.constructor.call(this, options);
    svgStart = '<svg height="' + this.height + '" width="' + this.width + '" stroke=' + this.strokeColor + ' stroke-width="' + this.strokeWidth + '" fill="' + this.fill + '">';
    pathBegin = '<path d="M';
    pathEnd = '">';
    svgEnd = '</svg>';
  }

  Path.define("path.animationOptions", {
    get: function() {
      return this._path.animationOptions;
    },
    set: function(value) {
      return this._path.animationOptions = value;
    }
  });

  Path.define("path.draggable", {
    get: function() {
      return this._path.draggable;
    },
    set: function(value) {
      return this._path.draggable = value;
    }
  });

  Path.define("pointVisible", {
    get: function() {
      return this._pointVisible;
    },
    set: function(value) {
      return this._pointVisible = value;
    }
  });

  Path.define("handleVisible", {
    get: function() {
      return this._handleVisible;
    },
    set: function(value) {
      return this._handleVisible = value;
    }
  });

  Path.define("pointSize", {
    get: function() {
      return this._pointSize;
    },
    set: function(value) {
      return this._pointSize = value;
    }
  });

  Path.define("handleSize", {
    get: function() {
      return this._handleSize;
    },
    set: function(value) {
      return this._handleSize = value;
    }
  });

  Path.define("pointColor", {
    get: function() {
      return this._pointColor;
    },
    set: function(value) {
      return this._pointColor = value;
    }
  });

  Path.define("handleColor", {
    get: function() {
      return this._handleColor;
    },
    set: function(value) {
      return this._handleColor = value;
    }
  });

  Path.define("strokeColor", {
    get: function() {
      return this._strokeColor;
    },
    set: function(value) {
      return this._strokeColor = value;
    }
  });

  Path.define("strokeWidth", {
    get: function() {
      return this._strokeWidth;
    },
    set: function(value) {
      return this._strokeWidth = value;
    }
  });

  Path.define("fill", {
    get: function() {
      return this._fill;
    },
    set: function(value) {
      return this._fill = value;
    }
  });

  return Path;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
