// Testing Client for Backend Requests
const axios = require('axios').default;

let serviceMsg = {
  method: "wipeReviews",
  params: {
  },
}

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
  await makeRESTRequest(`localhost:3000/post/Pioneer`, serviceMsg);
  await makeRESTRequest(`localhost:3000/post/Territorial`, serviceMsg);
  await makeRESTRequest(`localhost:3000/post/Centennial`, serviceMsg);
  await makeRESTRequest(`localhost:3000/post/Frontier`, serviceMsg);
  await makeRESTRequest(`localhost:3000/post/Sanford`, serviceMsg);
  await makeRESTRequest(`localhost:3000/post/17th`, serviceMsg);
  await makeRESTRequest(`localhost:3000/post/Comstock`, serviceMsg);
  await makeRESTRequest(`localhost:3000/post/Bailey`, serviceMsg);
  await makeRESTRequest(`localhost:3000/post/Middlebrook`, serviceMsg);
})();
