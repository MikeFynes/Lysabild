
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

        var expectedOutput = ["Best link station for point 0,0 is 0,0 with power 100",
            "No link station within reach for point 100,100",
        "Best link station for point 15,10 is 10,0 with power 0.6718427000252355",
        "Best link station for point 18,18 is 20,20 with power 4.715728752538098"]

        expect(expectedOutput === outputs);
    })
});
