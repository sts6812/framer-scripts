require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"LayersModified":[function(require,module,exports){
module.exports = {
  all: function() {
    return Framer.CurrentContext.layers;
  },
  withName: function(name) {
    return _.filter(this.all(), function(layer) {
      if (layer.name === name) {
        return true;
      }
    });
  },
  containing: function(name) {
    return _.filter(this.all(), function(layer) {
      if (layer.name.indexOf(name) !== -1) {
        return true;
      }
    });
  },
  withWord: function(name, delimiter) {
    var both, end, start;
    if (delimiter == null) {
      delimiter = '_';
    }
    both = delimiter + name + delimiter;
    end = name + delimiter;
    start = delimiter + name;
    return _.filter(this.all(name), function(layer) {
      if (layer.name === name) {
        return true;
      } else if (layer.name.indexOf(both) !== -1) {
        return true;
      } else if (layer.name.indexOf(end) === 0) {
        return true;
      } else if (layer.name.indexOf(start) === layer.name.length - start.length) {
        return true;
      }
    });
  },
  startingWith: function(name) {
    return _.filter(this.all(), function(layer) {
      if (layer.name.substring(0, name.length) === name) {
        return true;
      }
    });
  },
  endingWith: function(name) {
    return _.filter(this.all(), function(layer) {
      if (layer.name.indexOf(name, layer.name.length - name.length) !== -1) {
        return true;
      }
    });
  },
  withState: function(state) {
    return _.filter(this.all(), function(layer) {
      var layerStates;
      layerStates = layer.states._orderedStates;
      if (layerStates.indexOf(state) !== -1) {
        return true;
      }
    });
  },
  withCurrentState: function(state) {
    return _.filter(this.all(), function(layer) {
      var currentState;
      currentState = layer.states.current;
      if (currentState.indexOf(state) !== -1) {
        return true;
      }
    });
  },
  withSuperLayer: function(name) {
    var i, layer, len, matchingLayers, ref, results;
    matchingLayers = [];
    ref = this.withName(name);
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      layer = ref[i];
      results.push(matchingLayers = matchingLayers.concat(layer.subLayers));
    }
    return results;
  },
  withSubLayer: function(name) {
    var i, layer, len, matchingLayers, ref, results;
    matchingLayers = [];
    ref = this.withName(name);
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      layer = ref[i];
      if (matchingLayers.indexOf(layer.superLayer) === -1) {
        results.push(matchingLayers.push(layer.superLayer));
      } else {
        results.push(void 0);
      }
    }
    return results;
  },
  where: function(obj) {
    return _.where(Framer.CurrentContext.getLayers(), obj);
  },
  get: function(name) {
    return this.withName(name)[0];
  }
};

Layer.prototype.switchPrefix = function(newPrefix, delimiter) {
  var name, newName;
  if (delimiter == null) {
    delimiter = '_';
  }
  name = this.name;
  newName = newPrefix + name.slice(name.indexOf(delimiter));
  return module.exports.get(newName);
};

Layer.prototype.findSubLayer = function(needle, recursive) {
  var i, j, len, len1, ref, ref1, subLayer;
  if (recursive == null) {
    recursive = true;
  }
  ref = this.subLayers;
  for (i = 0, len = ref.length; i < len; i++) {
    subLayer = ref[i];
    if (subLayer.name.toLowerCase().indexOf(needle.toLowerCase()) !== -1) {
      return subLayer;
    }
  }
  if (recursive) {
    ref1 = this.subLayers;
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      subLayer = ref1[j];
      if (subLayer.findSubLayer(needle, recursive)) {
        return subLayer.findSubLayer(needle, recursive);
      }
    }
  }
};

Layer.prototype.find = function(needle, recursive) {
  if (recursive == null) {
    recursive = true;
  }
  return this.findSubLayer(needle, recursive = true);
};

Layer.prototype.findSuperLayer = function(needle, recursive) {
  if (recursive == null) {
    recursive = true;
  }
  if (this.superLayer.name.toLowerCase().indexOf(needle.toLowerCase()) !== -1) {
    return this.superLayer;
  }
  if (recursive) {
    if (this.superLayer.findSuperLayer(needle, recursive)) {
      return this.superLayer.findSuperLayer(needle, recursive);
    }
  }
};
    },{}]},{},[])

// ---
// generated by coffee-script 1.9.2