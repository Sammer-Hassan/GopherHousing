const { MongoClient } = require('mongodb');
const dburl = 'Input URL';

class Database {
    constructor(dorm) {
        this.dormCollection = `${dorm}_Reviews`;
        this.client = null;
    }

    async connect() {
        if (!this.client) {
            this.client = await MongoClient.connect(dburl, { useNewUrlParser: true });
        }
    }

    async pollAllReviews() {
        await this.connect();
        const db = this.client.db("Dorm_Reviews");
        let collection = db.collection(this.dormCollection);
        let dbres = await collection.find().toArray();
        return dbres;
    }

    async deleteAllReviews() {
        await this.connect();
        const db = this.client.db("Dorm_Reviews");
        let collection = db.collection(this.dormCollection);
        await collection.deleteMany();
    }

    async addOneReview(review) {
        await this.connect();
        const db = this.client.db("Dorm_Reviews");
        let collection = db.collection(this.dormCollection);
        await collection.insertOne(review);
    }

    async close() {
        if (this.client) {
            await this.client.close();
            this.client = null;
        }
    }
}

module.exports = Database;
