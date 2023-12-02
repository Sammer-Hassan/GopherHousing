// Testing Client for Backend Requests
// let axios = require("axios");
const axios = require('axios').default;

// Function to make proper rest call to hub
async function makeRESTRequest(url, parms) {
  try {
    const response = await axios.post(url, parms);
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


// End point to make calls
(async () => {
  let resp = await makeRESTRequest(`http://localhost:3000/api/centennial`);
  console.log(resp);
})();
