const linkStation = require('./link_station')

describe('The devices power', function () {
    it('Finds the link station that provides most power to device', function* () {
        var input = [ [0,0] , [100, 100] , [15,10] , [18, 18]];
        var linkStations = [[0, 0, 10], [20, 20, 5], [10, 0, 12]];
        for (var i = 0; i < input.length; i++) {
            var deviceCoordinates = input[i];
            console.log(linkStation.findNearestLinkStation(deviceCoordinates, linkStations));
        }
    })
});
