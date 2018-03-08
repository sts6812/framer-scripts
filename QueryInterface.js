require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"QueryInterface":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.QueryInterface = (function(superClass) {
  var _allQueryInterfaces, getParameterByName, updateQueryString;

  extend(QueryInterface, superClass);

  if (typeof _allQueryInterfaces === "undefined" || _allQueryInterfaces === null) {
    _allQueryInterfaces = [];
  }

  getParameterByName = function(name) {
    var location, match;
    if (Utils.isInsideFramerCloud()) {
      location = window.parent.location.search;
    } else {
      location = window.location.search;
    }
    match = RegExp("[?&]" + name + "=([^&]*)").exec(location);
    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
  };

  updateQueryString = function(key, value, url) {
    var hash, re, separator;
    if (url == null) {
      if (Utils.isInsideFramerCloud()) {
        url = window.parent.location.href;
      } else {
        url = window.location.href;
      }
    }
    key = key.replace("#", "%23");
    if (typeof value === "string") {
      value = value.replace("#", "%23");
    }
    re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi");
    hash = void 0;
    if (re.test(url)) {
      if (typeof value !== "undefined" && value !== null) {
        return url.replace(re, "$1" + key + "=" + value + "$2$3");
      } else {
        hash = url.split("#");
        url = hash[0].replace(re, "$1$3").replace(/(&|\?)$/, "");
        if (typeof hash[1] !== "undefined" && hash[1] !== null) {
          url += "#" + hash[1];
        }
        return url;
      }
    } else {
      if (typeof value !== "undefined" && value !== null) {
        separator = url.indexOf("?") !== -1 ? "/&" : "?";
        hash = url.split("#");
        url = "" + hash[0] + separator + key + "=" + value;
        if (typeof hash[1] !== "undefined" && hash[1] !== null) {
          url += "#" + hash[1];
        }
        return url;
      } else {
        return url;
      }
    }
  };

  QueryInterface.define("value", {
    get: function() {
      var localValue, locationPathName, val;
      if (Utils.isInsideFramerCloud()) {
        locationPathName = window.parent.location.pathname;
      } else {
        locationPathName = window.location.pathname;
      }
      if (getParameterByName(this.key) && this.fetchQuery) {
        return this.value = this._parse(getParameterByName(this.key), false);
      } else if (this.saveLocal === false || this.loadLocal === false) {
        if (this._val === void 0 || this._val === "undefined") {
          return this["default"];
        } else {
          return this._val;
        }
      } else if (localStorage.getItem(locationPathName + "?" + this.key + "=") && this.loadLocal) {
        localValue = localStorage.getItem(locationPathName + "?" + this.key + "=");
        if (localValue === void 0 || localValue === "undefined") {
          return this.reset();
        } else {
          return val = this._parse(localValue, false);
        }
      } else {
        return this.value = this["default"];
      }
    },
    set: function(val) {
      var newUrl;
      if (this["default"] === void 0 || this.key === void 0) {
        return;
      }
      this._val = val = this._parse(val, true);
      if (this.saveLocal) {
        localStorage.setItem(window.location.pathname + "?" + this.key + "=", val);
      }
      if (this.publish === true) {
        newUrl = updateQueryString(this.key, val);
        if (Utils.isFramerStudio() !== true || this._forcePublish) {
          try {
            window.history.replaceState({
              path: newUrl
            }, this.key + " changed to " + val, newUrl);
          } catch (_error) {}
        }
        if (Utils.isInsideIframe()) {
          try {
            return window.parent.history.replaceState({
              path: newUrl
            }, this.key + " changed to " + val, newUrl);
          } catch (_error) {}
        }
      } else {
        newUrl = updateQueryString(this.key);
        if (Utils.isInsideIframe()) {
          return window.parent.history.replaceState({
            path: newUrl
          }, this.key + " removed from URI", newUrl);
        } else if (Utils.isInsideIframe() === false) {
          return window.history.replaceState({
            path: newUrl
          }, this.key + " removed from URI", newUrl);
        }
      }
    }
  });

  QueryInterface.define("type", {
    get: function() {
      return typeof this["default"];
    }
  });

  QueryInterface.define("default", {
    get: function() {
      return this._default;
    },
    set: function(val) {
      var locationPathName, newType, parsedVal, savedDefault, savedType;
      if (Utils.isInsideFramerCloud()) {
        locationPathName = window.parent.location.pathname;
      } else {
        locationPathName = window.parent.location.pathname;
      }
      if (typeof val === "function" || this.key === void 0) {
        return;
      }
      this._default = val;
      if (localStorage.getItem(locationPathName + "?" + this.key + "Default=")) {
        savedDefault = localStorage.getItem(locationPathName + "?" + this.key + "Default=");
      }
      parsedVal = val.toString();
      localStorage.setItem(locationPathName + "?" + this.key + "Default=", parsedVal);
      if (parsedVal !== savedDefault) {
        if (Utils.isFramerStudio()) {
          this.reset();
        }
      }
      if (localStorage.getItem(locationPathName + "?" + this.key + "Type=")) {
        savedType = localStorage.getItem(locationPathName + "?" + this.key + "Type=");
      }
      newType = typeof val;
      localStorage.setItem(locationPathName + "?" + this.key + "Type=", newType);
      if (savedType && newType !== savedType) {
        return this.reset();
      }
    }
  });

  function QueryInterface(options) {
    var base, base1, base2, base3, base4;
    this.options = options != null ? options : {};
    this.key = (base = this.options).key != null ? base.key : base.key = void 0;
    this.publish = (base1 = this.options).publish != null ? base1.publish : base1.publish = true;
    this.fetchQuery = (base2 = this.options).fetchQuery != null ? base2.fetchQuery : base2.fetchQuery = true;
    this.saveLocal = (base3 = this.options).saveLocal != null ? base3.saveLocal : base3.saveLocal = true;
    this.loadLocal = (base4 = this.options).loadLocal != null ? base4.loadLocal : base4.loadLocal = true;
    this._forcePublish = false;
    QueryInterface.__super__.constructor.apply(this, arguments);
    _allQueryInterfaces.push(this);
    this.value = this.value;
  }

  QueryInterface.prototype._parse = function(val, set) {
    if (val === "/reset/" || val === "/default/") {
      val = this["default"];
    } else {
      switch (typeof this["default"]) {
        case "number":
          if (val === false || val === null || isNaN(val)) {
            val = 0;
          } else if (val) {
            val = Number(val);
            if (isNaN(val)) {
              val = this["default"];
            }
          } else {
            val = this["default"];
          }
          break;
        case "boolean":
          switch (typeof val) {
            case "object":
              val = Boolean(val);
              break;
            case "undefined":
              val = false;
              break;
            case "string":
              if (val.toLowerCase() === "true") {
                val = true;
              } else if (val.toLowerCase() === "false") {
                val = false;
              } else {
                val = true;
              }
              break;
            case "number":
              if (val === 0) {
                val = false;
              } else {
                val = true;
              }
          }
          break;
        case "string":
          if (val) {
            val = val.toString();
          } else {
            val = this["default"];
          }
          break;
        case "object":
          if (set) {
            if (!(val === void 0 || val === null)) {
              val = JSON.stringify(val);
            } else {
              val = this["default"];
            }
          } else {
            if (!(val === void 0 || val === null || val === "undefined" || val === "null")) {
              val = JSON.parse(val);
            } else {
              val = this["default"];
            }
          }
      }
    }
    return val;
  };

  QueryInterface.prototype.reset = function() {
    return this.value = this["default"];
  };

  QueryInterface.resetAll = function() {
    var i, len, newUrl, queryInterface;
    for (i = 0, len = _allQueryInterfaces.length; i < len; i++) {
      queryInterface = _allQueryInterfaces[i];
      queryInterface.reset();
    }
    newUrl = window.location.href.split('?')[0];
    if (newUrl != null) {
      window.history.replaceState({
        path: newUrl
      }, "Reset all QueryInterfaces", newUrl);
    }
    return location.reload();
  };

  QueryInterface.query = function() {
    var i, j, len, len1, query, queryInterface;
    for (i = 0, len = _allQueryInterfaces.length; i < len; i++) {
      queryInterface = _allQueryInterfaces[i];
      queryInterface._forcePublish = true;
      queryInterface.value = queryInterface.value;
    }
    if (Utils.isFramerStudio()) {
      query = ("?" + (updateQueryString("reloader").split('?')[1])).replace(/%22/g, "\"");
    } else {
      query = window.location.search.replace(/%22/g, "\"");
    }
    for (j = 0, len1 = _allQueryInterfaces.length; j < len1; j++) {
      queryInterface = _allQueryInterfaces[j];
      queryInterface._forcePublish = false;
      queryInterface.value = queryInterface.value;
    }
    return query;
  };

  return QueryInterface;

})(Framer.BaseClass);
 },{}]},{},[])

// ---
// generated by coffee-script 1.9.2
