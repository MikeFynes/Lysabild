'use strict'
/*

A link station’s power can be calculated:
power = (reach - device's distance from link station)^2
if distance > reach, power = 0*/

var linkStations = [[0, 0, 10], [20, 20, 5], [10, 0, 12]];
// var linkStations = [[0, 0, 10], [20, 20, 5]];

function findNearestLinkStation (deviceLocation) {
    var bestLinkStation = null;
    // console.log("Device at coordinates : "+deviceLocation)
    var outputString = "No link station within reach for point "+deviceLocation;
    for (var i = 0; i < linkStations.length; i++) {
        var linkStation = linkStations[i];
        // console.log("linkStation at coordinates : "+linkStation)
        var distance = distanceToStation([linkStation[0], linkStation[1]], deviceLocation);

        var power = linkStationPower(linkStation[2], distance);

        if(bestLinkStation == null && power > 0){
            bestLinkStation = [linkStation[0], linkStation[1], power];
        }
        else if(bestLinkStation != null && power > bestLinkStation[2] && power > 0){
                bestLinkStation = [linkStation[0], linkStation[1], power];
            }
    }
    if(bestLinkStation != null){
        var linkStationLoc = [bestLinkStation[0], bestLinkStation[1]];
        outputString = "Best link station for point " + deviceLocation+ " is "+linkStationLoc+" with power "+bestLinkStation[2];
    }


return outputString
}


// Distance = sqrt( (Xb−Xa)^2 + (Yb−Ya)^2 )
function distanceToStation(linkStationCoordinates, deviceCoordinates){
    // console.log("linkStation at coordinates : "+linkStationCoordinates)
    // console.log("Device at coordinates : "+deviceCoordinates)

    // (x2−x1)^2
    var distance = Math.sqrt( Math.pow((linkStationCoordinates[0] - deviceCoordinates[0]),2) +  Math.pow((linkStationCoordinates[1] - deviceCoordinates[1]), 2));
    // console.log("distance = "+distance);
    return distance;
}


function linkStationPower(reach, distance){
    var power = 0;
    // console.log("reach = "+reach);
    // console.log("distance = "+distance);

    if(reach >= distance){
        power =  Math.pow((reach - distance),2);
    }

    // console.log("power = "+power);
    return power;
}

module.exports = {
  findNearestLinkStation
}
