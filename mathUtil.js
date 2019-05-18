function getDistance(lat1, lon1, lat2, lon2) {
    let p = 0.017453292519943295;    // Math.PI / 180
    let cos = Math.cos;
    let a = 0.5 - cos((lat2 - lat1) * p)/2 + 
            cos(lat1 * p) * cos(lat2 * p) * 
            (1 - cos((lon2 - lon1) * p))/2;
  
    return 12742 * Math.asin(Math.sqrt(a));
}

module.exports = {
    getDistance
};