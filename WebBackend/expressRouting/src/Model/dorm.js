const Database = require('../Database/mongoDatabase/databaseControl');

class Dorm {
    constructor(name, id, address) {
        this.name = name;
        this.webID = id;
        this.address = address;
        this.reviews = [];
        this.database = new Database(name);
        this.averages = {
            locationAvg: 0,
            buildingAvg: 0,
            socialAvg: 0,
            foodAvg: 0,
            overallAvg: 0,
        };
    }

    // Sets reviews in database to class instance
    async setReviews(){
        this.reviews = await this.database.pollAllReviews();
        this.averages.locationAvg = 0;
        this.averages.socialAvg = 0;
        this.averages.buildingAvg = 0;
        this.averages.foodAvg = 0;
        this.reviews.forEach(review => {
            this.averages.buildingAvg += review.buildingRating;
            this.averages.socialAvg += review.socialRating;
            this.averages.locationAvg += review.locationRating;
            this.averages.foodAvg += review.foodRating;
        });
    
        this.averages.buildingAvg = parseFloat((this.averages.buildingAvg / this.reviews.length).toFixed(1));
        this.averages.foodAvg = parseFloat((this.averages.foodAvg / this.reviews.length).toFixed(1));
        this.averages.socialAvg = parseFloat((this.averages.socialAvg / this.reviews.length).toFixed(1));
        this.averages.locationAvg = parseFloat((this.averages.locationAvg / this.reviews.length).toFixed(1));
        this.averages.overallAvg = parseFloat(((this.averages.buildingAvg + this.averages.foodAvg + this.averages.socialAvg + this.averages.locationAvg)/4).toFixed(1));
    }

    async wipeReviews(){
        await this.database.deleteAllReviews();
        await this.setReviews();
    }

    async addReview(review){
        await this.database.addOneReview(review);
        await this.setReviews();
    }

    getName() {
        return this.name;
    }

    getAddress() {
        return this.address;
    }

    getReviews() {
        return this.reviews;
    }

}


module.exports = Dorm;