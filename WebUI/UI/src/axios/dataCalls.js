// File for all axios functions
import axios from "axios";

export default class infoHandling {
    // Call to add review for frontend
    async addReview(reviewObj, dorm) {
        let serviceMsg = {
            method: "addReview",
            params: {
                review: reviewObj
            }
        }

        let url = `https://gopherhousingsite-5iqukb50w-jonathanparaschou.vercel.app/api/${dorm}`
        await this.makeRESTRequest(url, serviceMsg);
    }

    // Call to wipe all reviews for frontend
    async wipeReviews(dorm) {
        let serviceMsg = {
            method: "wipeReviews",
            params: {}
        }

        let url = `https://gopherhousingsite-5iqukb50w-jonathanparaschou.vercel.app/api/${dorm}`
        await this.makeRESTRequest(url, serviceMsg);
    }

    async getDormInfo(dorm) {
        let url = `https://gopherhousingsite-5iqukb50w-jonathanparaschou.vercel.app/api/${dorm}`
        return await this.makeRESTRequest(url);        
    }

    // Base Function to make Request
    async makeRESTRequest(url, parms) {
        try {
            const response = await axios.get(url, {
                headers: {
                    "content-type": "application/json",
                },
                data: parms,
            });

            const dataObj = response.data;
            return dataObj;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return { err: "true", errMsg: error };
            } else {
                return { err: "true", errMsg: error };
            }
        }
    }
}

