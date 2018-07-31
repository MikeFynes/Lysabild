'use strict'

const fs = require('fs')
const request = require('request')


/*
param @linkStations array of arrays, contains coordinates of link stations in [x, y]
param @deviceLocation is the current location of the device

A link station’s power can be calculated:
power = (reach - device's distance from link station)^2
if distance > reach, power = 0*/

function findNearestLinkStation (linkStations, deviceLocation) {


return ""
}


module.exports = {
  findNearestLinkStation
}
