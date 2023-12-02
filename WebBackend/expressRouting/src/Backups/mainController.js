// Dorm Class
const Dorm = require('../Model/dorm')

// Express Reqs
const express = require('express')
const expressRouter = express()
const port = 3000
var cors = require('cors');
expressRouter.use(cors());
expressRouter.use(express.json());  // NEEDED to interpret requests

// Type Check Function
function isValidReview(reviewObj) {
    if (reviewObj.hasOwnProperty('locationRating') && reviewObj.hasOwnProperty('socialRating') && reviewObj.hasOwnProperty('buildingRating') && reviewObj.hasOwnProperty('foodRating')) {
        return true;
    } else {
        return false;
    }
}

// Express Router

// GET REQUESTS
expressRouter.get('/api/Territorial', async (req, res) => {
    let dorm = new Dorm('Territorial', '417 Walnut St SE, Minneapolis, MN 55455');

    await dorm.setReviews();

    res.send(dorm);
});

expressRouter.get('/api/Centennial', async (req, res) => {
    let dorm = new Dorm('Centennial', '614 Delaware St SE, Minneapolis, MN 55455');

    await dorm.setReviews();

    res.send(dorm);
});

expressRouter.get('/api/Frontier', async (req, res) => {
    let dorm = new Dorm('Frontier', '701 Fulton St SE, Minneapolis, MN 55455');

    await dorm.setReviews();

    res.send(dorm);
});

expressRouter.get('/api/Pioneer', async (req, res) => {
    let dorm = new Dorm('Pioneer', '615 Fulton St SE, Minneapolis, MN 55455');

    await dorm.setReviews();

    res.send(dorm);
});

expressRouter.get('/api/17th', async (req, res) => {
    let dorm = new Dorm('17th', '326 SE 17th Ave, Minneapolis, MN 55414');

    await dorm.setReviews();

    res.send(dorm);
});

expressRouter.get('/api/Bailey', async (req, res) => {
    let dorm = new Dorm('Bailey', '1458 Cleveland Avenue N St. Paul, MN 55108');

    await dorm.setReviews();

    res.send(dorm);
});

expressRouter.get('/api/Comstock', async (req, res) => {
    let dorm = new Dorm('Comstock', '210 Delaware St SE, Minneapolis, MN 55455');

    await dorm.setReviews();

    res.send(dorm);
});

expressRouter.get('/api/Middlebrook', async (req, res) => {
    let dorm = new Dorm('Middlebrook', '412 22nd Ave S, Minneapolis, MN 55455');

    await dorm.setReviews();

    res.send(dorm);
});

expressRouter.get('/api/Sanford', async (req, res) => {
    let dorm = new Dorm('Sanford', '1122 University Ave SE, Minneapolis, MN 55455');

    await dorm.setReviews();

    res.send(dorm);
});

expressRouter.get('/api/Total', async (req, res) => {
    let territorial = new Dorm('Territorial', '417 Walnut St SE, Minneapolis, MN 55455');
    let centennial = new Dorm('Centennial', '614 Delaware St SE, Minneapolis, MN 55455');
    let pioneer = new Dorm('Pioneer', '615 Fulton St SE, Minneapolis, MN 55455');
    let frontier = new Dorm('Frontier', '701 Fulton St SE, Minneapolis, MN 55455');
    let seventeenth = new Dorm('17th', '326 SE 17th Ave, Minneapolis, MN 55414');
    let bailey = new Dorm('Bailey', '1458 Cleveland Avenue N St. Paul, MN 55108');
    let comstock = new Dorm('Comstock', '210 Delaware St SE, Minneapolis, MN 55455');
    let middlebrook = new Dorm('Middlebrook', '412 22nd Ave S, Minneapolis, MN 55455');
    let sanford = new Dorm('Sanford', '1122 University Ave SE, Minneapolis, MN 55455');

    await territorial.setReviews();
    await centennial.setReviews();
    await pioneer.setReviews();
    await frontier.setReviews();
    await seventeenth.setReviews();
    await bailey.setReviews();
    await comstock.setReviews();
    await middlebrook.setReviews();
    await sanford.setReviews();

    let returnArr = [territorial, centennial, pioneer, frontier, seventeenth, bailey, comstock, middlebrook, sanford];

    res.send(returnArr)
})

// POST REQUESTS
expressRouter.post('/post/Centennial', async (req, res) => {
    let dorm = new Dorm('Centennial', '614 Delaware St SE, Minneapolis, MN 55455');

    // Method calls
    let requestedMethod = req.body.method;

    if (requestedMethod == "addReview") {
        let reviewToAdd = req.body.params.review;
        if (isValidReview(reviewToAdd)) {
            dorm.addReview(reviewToAdd);
        } else {
            res.send('Incorrect Obj Typing!!')
        }
    }

    if (requestedMethod == "wipeReviews") {
        dorm.wipeReviews();
    }

    await dorm.setReviews();

    res.send(dorm);
})

expressRouter.post('/post/Territorial', async (req, res) => {
    // Bootup polling
    let dorm = new Dorm('Territorial', '417 Walnut St SE, Minneapolis, MN 55455');

    // Method calls
    let requestedMethod = req.body.method;

    if (requestedMethod == "addReview") {
        let reviewToAdd = req.body.params.review;
        if (isValidReview(reviewToAdd)) {
            dorm.addReview(reviewToAdd);
        } else {
            res.send('Incorrect Obj Typing!!')
        }
    }

    if (requestedMethod == "wipeReviews") {
        dorm.wipeReviews();
    }

    await dorm.setReviews();

    res.send(dorm);
})

expressRouter.post('/post/Frontier', async (req, res) => {
    let dorm = new Dorm('Frontier', '701 Fulton St SE, Minneapolis, MN 55455');

    // Method calls
    let requestedMethod = req.body.method;

    if (requestedMethod == "addReview") {
        let reviewToAdd = req.body.params.review;
        if (isValidReview(reviewToAdd)) {
            dorm.addReview(reviewToAdd);
        } else {
            res.send('Incorrect Obj Typing!!')
        }
    }

    if (requestedMethod == "wipeReviews") {
        dorm.wipeReviews();
    }

    await dorm.setReviews();

    res.send(dorm);
});

expressRouter.post('/post/Pioneer', async (req, res) => {
    let dorm = new Dorm('Pioneer', '615 Fulton St SE, Minneapolis, MN 55455');

    // Method calls
    let requestedMethod = req.body.method;

    if (requestedMethod == "addReview") {
        let reviewToAdd = req.body.params.review;
        if (isValidReview(reviewToAdd)) {
            dorm.addReview(reviewToAdd);
        } else {
            res.send('Incorrect Obj Typing!!')
        }
    }

    if (requestedMethod == "wipeReviews") {
        dorm.wipeReviews();
    }

    await dorm.setReviews();

    res.send(dorm);
});

expressRouter.post('/post/17th', async (req, res) => {
    let dorm = new Dorm('17th', '326 SE 17th Ave, Minneapolis, MN 55414');

    // Method calls
    let requestedMethod = req.body.method;

    if (requestedMethod == "addReview") {
        let reviewToAdd = req.body.params.review;
        if (isValidReview(reviewToAdd)) {
            dorm.addReview(reviewToAdd);
        } else {
            res.send('Incorrect Obj Typing!!')
        }
    }

    if (requestedMethod == "wipeReviews") {
        dorm.wipeReviews();
    }

    await dorm.setReviews();

    res.send(dorm);
});

expressRouter.post('/post/Bailey', async (req, res) => {
    let dorm = new Dorm('Bailey', '1458 Cleveland Avenue N St. Paul, MN 55108');

    // Method calls
    let requestedMethod = req.body.method;

    if (requestedMethod == "addReview") {
        let reviewToAdd = req.body.params.review;
        if (isValidReview(reviewToAdd)) {
            dorm.addReview(reviewToAdd);
        } else {
            res.send('Incorrect Obj Typing!!')
        }
    }

    if (requestedMethod == "wipeReviews") {
        dorm.wipeReviews();
    }

    await dorm.setReviews();

    res.send(dorm);
});

expressRouter.post('/post/Comstock', async (req, res) => {
    let dorm = new Dorm('Comstock', '210 Delaware St SE, Minneapolis, MN 55455');

    // Method calls
    let requestedMethod = req.body.method;

    if (requestedMethod == "addReview") {
        let reviewToAdd = req.body.params.review;
        if (isValidReview(reviewToAdd)) {
            dorm.addReview(reviewToAdd);
        } else {
            res.send('Incorrect Obj Typing!!')
        }
    }

    if (requestedMethod == "wipeReviews") {
        dorm.wipeReviews();
    }

    await dorm.setReviews();

    res.send(dorm);
});

expressRouter.post('/post/Middlebrook', async (req, res) => {
    let dorm = new Dorm('Middlebrook', '412 22nd Ave S, Minneapolis, MN 55455');

    // Method calls
    let requestedMethod = req.body.method;

    if (requestedMethod == "addReview") {
        let reviewToAdd = req.body.params.review;
        if (isValidReview(reviewToAdd)) {
            dorm.addReview(reviewToAdd);
        } else {
            res.send('Incorrect Obj Typing!!')
        }
    }

    if (requestedMethod == "wipeReviews") {
        dorm.wipeReviews();
    }

    await dorm.setReviews();

    res.send(dorm);
});

expressRouter.post('/post/Sanford', async (req, res) => {
    let dorm = new Dorm('Sanford', '1122 University Ave SE, Minneapolis, MN 55455');

    // Method calls
    let requestedMethod = req.body.method;

    if (requestedMethod == "addReview") {
        let reviewToAdd = req.body.params.review;
        if (isValidReview(reviewToAdd)) {
            dorm.addReview(reviewToAdd);
        } else {
            res.send('Incorrect Obj Typing!!')
        }
    }

    if (requestedMethod == "wipeReviews") {
        dorm.wipeReviews();
    }

    await dorm.setReviews();

    res.send(dorm);
});

expressRouter.listen(port, () => {
    console.log(`Client attached to port ${port}`)
});
