function mungeTrails(trailsData) {
    let returnArray = trailsData.trails.map(trail => {
        return {
            name: trail.name,
            location: trail.location,
            length: trail.length,
            stars: trail.stars,
            star_votes: trail.star_votes,
            summary: trail.summary,
            trail_url: trail.trail_url,
            conditions: trail.conditions,
            condition_date: trail.condition_date,
            condition_time: trail.contion_time,

        }
    })
    return returnArray;
}


module.exports = {
    mungeTrails
};
