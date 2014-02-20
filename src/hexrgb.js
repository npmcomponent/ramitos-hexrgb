require('stagas-component-plus-node')
var type = require('component-type')

function scale (num, min, max) {
  return Math.min(Math.max(min, num), max)
}

function hexDouble (num) {
  var str = num.toString(16).toUpperCase()
  return (str.length < 2) ? '0' + str : str
}

module.exports.rgb = function (string) {
  if (type(string) !== 'string') return [];

  var abbr =  /#([a-fA-F0-9]{3})$/
  var hex =  /#([a-fA-F0-9]{6})$/
  var rgba = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d\.]+)\s*)?\)$/
  var per = /rgba?\(\s*([\d\.]+)\%\s*,\s*([\d\.]+)\%\s*,\s*([\d\.]+)\%\s*(?:,\s*([\d\.]+)\s*)?\)$/

  var rgb = [0, 0, 0], a = 1
  var match = string.match(abbr)

  if (match) {
    match = match[1]
    for (var i = 0; i < rgb.length; i+=1) {
      rgb[i] = parseInt(match[i] + match[i], 16)
    }
  } else if (match = string.match(hex)) {
    match = match[1]
    for (var y = 0; y < rgb.length; y+=1) {
      rgb[y] = parseInt(match.slice(y * 2, y * 2 + 2), 16)
    }
  } else if (match = string.match(rgba)) {
    for (var z = 0; z < rgb.length; z+=1) {
      rgb[z] = parseInt(match[z + 1])
    }

    a = parseFloat(match[4])
  } else if (match = string.match(per)) {
    for (var x = 0; x < rgb.length; x+=1) {
      rgb[x] = Math.round(parseFloat(match[x + 1]) * 2.55)
    }

    a = parseFloat(match[4])
  } else {
    return [];
  }

  for (var k = 0; k < rgb.length; k+=1) {
    rgb[k] = scale(rgb[k], 0, 255)
  }

  if (!a && a !== 0) a = 1
  else a = scale(a, 0, 1)

  rgb.push(a)
  return rgb
}

module.exports.hex = function (rgb) {
  if (type(rgb) !== 'array') return '';
  return '#' + hexDouble(rgb[0]) + hexDouble(rgb[1]) + hexDouble(rgb[2])
}