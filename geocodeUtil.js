const request = require('request-promise-native');

module.exports = (address) => {
    let options = {
        json: true
    };
    return request.get("https://jsonplaceholder.typicode.com/posts", options);
}