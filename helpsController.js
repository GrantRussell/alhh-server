const mathUtil = require('./mathUtil');
const database = require('./database');


async function index(req, res) {
    req.params.lat = 41.737184;
    req.params.lon = -111.820316; //TODO: Get client to send lat and lon

    const helps = await database.getDatabaseData();
    const userLocation = {
        lat: req.params.lat,
        lon: req.params.lon
    }

    const filteredHelps = filterHelps(helps, userLocation);

    res.status(200).send(JSON.stringify(filteredHelps));    
}

function filterHelps(helps, location, filterDistance = 5) {
    let helpDistance;
    let filteredHelps = [];
    helps.forEach((help) => {
        helpDistance = mathUtil.getDistance(help.lat, help.lon, location.lat, location.lon);
        if (helpDistance < filterDistance) {
            filteredHelps.push(help);
        }
    });
    
    return filteredHelps;
}

module.exports = {
    index
};