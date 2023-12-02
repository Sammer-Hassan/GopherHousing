const Router = require('./Router');
const Dorm = require('../Model/dorm')

function main() {
    try {
        let httpPort = 3000;
        const router = new Router(httpPort);
        try {
            router.init();
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