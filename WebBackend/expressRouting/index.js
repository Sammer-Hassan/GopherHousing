const Router = require('./src/Controller/Router');
const Dorm = require('./src/Model/dorm')



function main() {
    try {
        // Map of all dormMapping
        let dormMapping = new Map();
        dormMapping.set('Territorial', new Dorm('Territorial', 'Territorial', '417 Walnut St SE, Minneapolis, MN 55455'));
        dormMapping.set('Centennial', new Dorm('Centennial', 'Centennial', '614 Delaware St SE, Minneapolis, MN 55455'));
        dormMapping.set('Frontier', new Dorm('Frontier', 'Frontier', '701 Fulton St SE, Minneapolis, MN 55455'));
        dormMapping.set('Pioneer', new Dorm('Pioneer', 'Pioneer', '615 Fulton St SE, Minneapolis, MN 55455'));
        dormMapping.set('17th', new Dorm('17th Avenue', '17th', '326 SE 17th Ave, Minneapolis, MN 55414'));
        dormMapping.set('Bailey', new Dorm('Bailey', 'Bailey', '1458 Cleveland Avenue N St. Paul, MN 55108'));
        dormMapping.set('Comstock', new Dorm('Comstock', 'Comstock', '210 Delaware St SE, Minneapolis, MN 55455'));
        dormMapping.set('Middlebrook', new Dorm('Middlebrook', 'Middlebrook', '412 22nd Ave S, Minneapolis, MN 55455'));
        dormMapping.set('Sanford', new Dorm('Sanford', 'Sanford', '1122 University Ave SE, Minneapolis, MN 55455'));

        
        let httpPort = 3000;
        const router = new Router(httpPort);
        try {
            router.init(dormMapping);
        } catch (err) {
            console.log('Caught Error Exception' + err);
            process.exit(0);
        }
        router.start();
    } catch (err) {
        console.log('Caught Error Exception ' + err);
    }
}

main();