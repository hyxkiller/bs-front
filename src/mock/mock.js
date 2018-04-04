const list = require('./list.json');
const carousel = require('./carousel.json')
const city = require('./city.json')

module.exports = function() {
    return {
        'list.json': list,
        'carousel.json': carousel,
        'city.json': city
    }
}