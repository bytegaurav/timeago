"use strict";

var _consts = require("consts");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var convert = function convert(date, refDate) {
  if (_typeof(date) != "object") {
    throw "invalid date, required object";
  }

  var dayString = getDateCardinal(date.getDate());

  if (refDate == null) {
    refDate = new Date();
  }

  if (_typeof(refDate) != "object") {
    throw "invalid date, required object";
  }

  if (refDate.getUTCFullYear == date.getUTCFullYear) {
    //same year
    if (refDate.getMonth() == date.getMonth()) {
      //same month
      if (refDate.getDate() == date.getDate()) {
        //same day
        return getRelativeTimeDifference(date);
      } else {
        //show day diff
        return Math.abs(refDate.getDate() - date.getDate()) + " days ago";
      }
    } else {
      //show month differnece
      return Math.abs(refDate.getMonth() - date.getMonth()) + " months ago";
    }
  } else {
    //say a (count) years ago
    return Math.abs(refDate.getUTCFullYear() - date.getUTCFullYear()) + " years ago";
  }
};

var getDateCardinal = function getDateCardinal(n) {
  var r = n % 100;
  var cardinals = ["th", "st", "nd", "rd"];
  return n + cardinals[(r - 20) % 10] || cardinals[v] || cardinals[0];
};

var getRelativeTimeDifference = function getRelativeTimeDifference(date, currentTime) {
  if (currentTime.getHours() - date.getHours() < 5) {
    //chech if its same hour
    if (currentTime.getHours() - date.getHours() == 0) {
      //same hour, show mins diff
      if (currentTime.getMinutes() - date.getMinutes() < 5) {
        //check if in same min
        if (currentTime.getMinutes() - date.getMinutes() == 0) {
          return "a few seconds ago";
        } else {
          return "a few mins ago";
        }
      } else {
        return currentTime.getMinutes() - date.getMinutes() + " mins ago";
      }
    } else {
      //not same hour
      return date.getHours() - currentTime.getHours() + " hours ago";
    }
  } else {
    return GetTime(date);
  }
};

var GetTime = function GetTime(date) {
  var ampm = "am";
  var hour = date.getHours();

  if (date.getHours() >= 12) {
    if (date.getHours() > 12) {
      hour = date.getHours() - 12;
    }

    ampm = "pm";
  }

  return hour + ":" + date.getMinutes() + " " + ampm;
};

module.exports = convert;