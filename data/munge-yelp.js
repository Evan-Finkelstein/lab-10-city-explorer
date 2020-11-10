function mungeYelp(yelpData) {
    let returnArray = yelpData.businesses.map(yelp => {
        return {
            name: yelp.name,
            image_url: yelp.image_url,
            price: yelp.price,
            rating: yelp.rating,
            url: yelp.url,

        }
    })
    return returnArray;
}


module.exports = {
    mungeYelp
};
