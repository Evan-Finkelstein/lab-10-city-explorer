function mungeYelp(yelpData) {
    let returnArray = yelpData.data.map(yelp => {
        return {
            name: yelp.businesses.name,
            image_url: yelp.businesses.image_url,
            price: yelp.businesses.price,
            rating: yelp.businesses.rating,
            url: yelp.businesses.url,

        }
    })
    return returnArray;
}


module.exports = {
    mungeYelp
};
