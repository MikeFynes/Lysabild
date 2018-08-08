
const expect = require('chai').expect

const linkStation = require('./link_station')

describe('The devices power', function () {
    it('Finds the link station that provides most power to device', function* () {
        var input = [ [0,0] , [100, 100] , [15,10] , [18, 18]];
        var linkStations = [[0, 0, 10], [20, 20, 5], [10, 0, 12]];

        var outputs = input.map( i => {
            console.log(linkStation.findNearestLinkStation(i, linkStations));
        });

        expect(outputs.length === input.length);
    })
});
