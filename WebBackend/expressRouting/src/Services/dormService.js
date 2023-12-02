// Dorm Class
const Dorm = require('../Model/dorm')

let dormMapping = new Map();

// Map of all dormMapping
dormMapping.set('Territorial', new Dorm('Territorial', '417 Walnut St SE, Minneapolis, MN 55455'));
dormMapping.set('Centennial', new Dorm('Centennial', '614 Delaware St SE, Minneapolis, MN 55455'));
dormMapping.set('Frontier', new Dorm('Frontier', '701 Fulton St SE, Minneapolis, MN 55455'));
dormMapping.set('Pioneer', new Dorm('Pioneer', '615 Fulton St SE, Minneapolis, MN 55455'));
dormMapping.set('17th', new Dorm('17th', '326 SE 17th Ave, Minneapolis, MN 55414'));
dormMapping.set('Bailey', new Dorm('Bailey', '1458 Cleveland Avenue N St. Paul, MN 55108'));
dormMapping.set('Comstock', new Dorm('Comstock', '210 Delaware St SE, Minneapolis, MN 55455'));
dormMapping.set('Middlebrook', new Dorm('Middlebrook', '412 22nd Ave S, Minneapolis, MN 55455'));
dormMapping.set('Sanford', new Dorm('Sanford', '1122 University Ave SE, Minneapolis, MN 55455'));
