const express = require('express');
const cors = require('cors');
const Dorm = require('../Model/dorm')


class Router {
    constructor(httpPort) {
        this.httpServer = null;
        this.httpPort = httpPort;
        this.expressRouter = express.Router();
        this.expressApp = express();
        this.dormMap = null;
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Type Check Function
    isValidReview(reviewObj) {
        let valReview = true;
        if(reviewObj.hasOwnProperty('writtenReviews')){
            if(reviewObj.writtenReviews.length > 1000){
                valReview = false;
            }
        }
        return (
            reviewObj.hasOwnProperty('locationRating') &&
            reviewObj.hasOwnProperty('socialRating') &&
            reviewObj.hasOwnProperty('buildingRating') &&
            reviewObj.hasOwnProperty('foodRating') &&
            reviewObj.hasOwnProperty('date') &&
            reviewObj.locationRating >= 1 && reviewObj.locationRating <= 5 &&
            reviewObj.socialRating >= 1 && reviewObj.socialRating <= 5 &&
            reviewObj.buildingRating >= 1 && reviewObj.buildingRating <= 5 &&
            reviewObj.foodRating >= 1 && reviewObj.foodRating <= 5 &&
            valReview
        );
    }


    init() {
        console.log('Initializing Router...');

        this.expressRouter.use(cors());
        this.expressRouter.use(express.json());

        this.dormMap = new Map();
        this.dormMap.set('Territorial', new Dorm('Territorial', 'Territorial', '417 Walnut St SE, Minneapolis, MN 55455'));
        this.dormMap.set('Centennial', new Dorm('Centennial', 'Centennial', '614 Delaware St SE, Minneapolis, MN 55455'));
        this.dormMap.set('Frontier', new Dorm('Frontier', 'Frontier', '701 Fulton St SE, Minneapolis, MN 55455'));
        this.dormMap.set('Pioneer', new Dorm('Pioneer', 'Pioneer', '615 Fulton St SE, Minneapolis, MN 55455'));
        this.dormMap.set('17th', new Dorm('17th Avenue', '17th', '326 SE 17th Ave, Minneapolis, MN 55414'));
        this.dormMap.set('Bailey', new Dorm('Bailey', 'Bailey', '1458 Cleveland Avenue N St. Paul, MN 55108'));
        this.dormMap.set('Comstock', new Dorm('Comstock', 'Comstock', '210 Delaware St SE, Minneapolis, MN 55455'));
        this.dormMap.set('Middlebrook', new Dorm('Middlebrook', 'Middlebrook', '412 22nd Ave S, Minneapolis, MN 55455'));
        this.dormMap.set('Sanford', new Dorm('Sanford', 'Sanford', '1122 University Ave SE, Minneapolis, MN 55455'));

        this.apartmentMap = new Map();
        this.apartmentMap.set('Keeler', new Dorm('Keeler', 'Keeler', '317 SE 17th Ave, Minneapolis, MN 55414'));
        this.apartmentMap.set('Radius', new Dorm('Radius', 'Radius', '701 15th Ave SE, Minneapolis, MN 55414'));
        this.apartmentMap.set('Yudof', new Dorm('Yudof', 'Yudof', '220 Delaware St SE, Minneapolis, MN 55455'));
        this.apartmentMap.set('Wilkins', new Dorm('Wilkins', 'Wilkins', '1212 University Avenue Se Minneapolis, MN 55455'));

        this.expressRouter.get('/api/:dorm', async (req, res) => {
            try {
                let reqHousing = this.capitalizeFirstLetter(req.params.dorm);
                if (reqHousing === 'Total') {
                    // Grabbing all dorm and apartments
                    const retVal = [];
                    for (const value of this.dormMap.values()) {
                        let currDorm = value;
                        await currDorm.setReviews();
                        let retData = {
                            name: currDorm.name,
                            address: currDorm.address,
                            webID: currDorm.webID,
                            reviews: currDorm.reviews,
                            averages: currDorm.averages
                        }
                        retVal.push(retData);
                    }

                    for (const value of this.apartmentMap.values()) {
                        let currApartment = value;
                        await currApartment.setReviews();
                        let retData = {
                            name: currApartment.name,
                            address: currApartment.address,
                            webID: currApartment.webID,
                            reviews: currApartment.reviews,
                            averages: currApartment.averages
                        }
                        retVal.push(retData);
                    }
                    return res.json(retVal);
                } else if (
                    reqHousing === 'Dorms'
                ){
                    // Grabbing dorms only
                    const retVal = [];
                    for (const value of this.dormMap.values()) {
                        let currDorm = value;
                        await currDorm.setReviews();
                        let retData = {
                            name: currDorm.name,
                            address: currDorm.address,
                            webID: currDorm.webID,
                            reviews: currDorm.reviews,
                            averages: currDorm.averages
                        }
                        retVal.push(retData);
                    }
                    return res.json(retVal);
                } else if (
                    reqHousing === 'Apartments'
                ){
                    // Grabbing apartments only
                    const retVal = [];
                    for (const value of this.apartmentMap.values()) {
                        let currApartment = value;
                        await currApartment.setReviews();
                        let retData = {
                            name: currApartment.name,
                            address: currApartment.address,
                            webID: currApartment.webID,
                            reviews: currApartment.reviews,
                            averages: currApartment.averages
                        }
                        retVal.push(retData);
                    }
                    return res.json(retVal);
                }
                else {
                    if(this.dormMap.has(reqHousing)){
                        // Specific Dorm
                        let currDorm = this.dormMap.get(reqHousing);
                        await currDorm.setReviews();
                        let retData = {
                            name: currDorm.name,
                            address: currDorm.address,
                            webID: currDorm.webID,
                            reviews: currDorm.reviews,
                            averages: currDorm.averages
                        }
                        return res.json(retData);
                    } else if (this.apartmentMap.has(reqHousing)){
                        // Specific Apartment
                        let currApartment = this.apartmentMap.get(reqHousing);
                        await currApartment.setReviews();
                        let retData = {
                            name: currApartment.name,
                            address: currApartment.address,
                            webID: currApartment.webID,
                            reviews: currApartment.reviews,
                            averages: currApartment.averages
                        }
                        return res.json(retData);
                    } else {
                        return res.status(404).json({
                            err: true,
                            errMsg: 'Unknown service ID ' + reqHousing,
                        });
                    }
                }
            } catch (err) {
                console.error(err);
                return res.status(500).json({
                    err: true,
                    errMsg: 'Internal server error',
                });
            }
        });

        this.expressRouter.post('/post/:dorm', async (req, res) => {
            try {
                // Establish Requested Housing
                let reqHousing = this.capitalizeFirstLetter(req.params.dorm);

                if(this.dormMap.has(reqHousing)){
                    // Adding to dorm map
                    let currDorm = this.dormMap.get(reqHousing);

                    // Method calls
                    let requestedMethod = req.body.method;

                    if (requestedMethod == 'addReview') {
                        let reviewToAdd = req.body.params.review;
                        if (this.isValidReview(reviewToAdd)) {
                            currDorm.addReview(reviewToAdd);
                        } else {
                            return res.status(400).json({
                                err: true,
                                errMsg: 'Incorrect object type for review',
                            });
                        }
                    }

                    // if (requestedMethod == 'wipeReviews') {
                    //     currDorm.wipeReviews();
                    // }

                    await currDorm.setReviews();
                    return res.json(currDorm);
                } else if(this.apartmentMap.has(reqHousing)){
                    // Adding to Apartment Map
                    let currApartment = this.apartmentMap.get(reqHousing);

                    // Method calls
                    let requestedMethod = req.body.method;

                    if (requestedMethod == 'addReview') {
                        let reviewToAdd = req.body.params.review;
                        if (this.isValidReview(reviewToAdd)) {
                            currApartment.addReview(reviewToAdd);
                        } else {
                            return res.status(400).json({
                                err: true,
                                errMsg: 'Incorrect object type for review',
                            });
                        }
                    }

                    await currApartment.setReviews();
                    return res.json(currApartment);
                } else {
                    return res.status(404).json({
                        err: true,
                        errMsg: 'Unknown service ID ' + reqHousing,
                    });
                }
            } catch (err) {
                console.error(err);
                return res.status(500).json({
                    err: true,
                    errMsg: 'Internal server error',
                });
            }
        });

        this.expressApp.use(this.expressRouter);

        console.log('Initialized Router...');
    }

    start() {
        this.httpServer = this.expressApp.listen(this.httpPort, () => {
            console.log('Started Express server on port ' + this.httpPort);
        });
    }

    async stop() {
        console.log('Stopping Router');
        this.httpServer?.close(() => {
            console.log('Express server closed');
        });
    }
}

module.exports = Router;
