function getDatabaseData(){
    const fakeDatabaseData = [
            {
                title: 'Need to move a couch',
                address: '51 W 880 N, Provo UT',
                lat: 40.245695,
                lon: -111.659741
            },
            {
                title: 'Get a cat out of the tree',
                address: '400 N Main St, Logan UT',
                lat: 41.739070,
                lon: -111.834765
            },
            {
                title: 'Need help cutting toe nails',
                address: '1693 N 400 W, Logan UT',
                lat: 41.776732,
                lon: -111.842679
            }
        ];

    return Promise.resolve(fakeDatabaseData);
}

module.exports = {
    getDatabaseData
};  