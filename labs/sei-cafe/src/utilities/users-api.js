import axios from 'axios'

// Let's create an API module that will handle user-related communications with the server:

// This is the base path of the Express route we'll define
//all the stuff from the api about the users
const BASE_URL = '/api/users';

export async function signUp(userData) {
  // Fetch uses an options object as a second arg to make requests
  // other than basic GET requests, include data, headers, etc.

//Post request using fetch
//   const res = await fetch(BASE_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     // Fetch requires data payloads to be stringified
//     // and assigned to a body property on the options object
//     body: JSON.stringify(userData)
//   });
//   // Check if request was successful
//   if (res.ok) {
//     // res.json() will resolve to the JWT
//     return res.json();
//   } else {
//     throw new Error('Invalid Sign Up');
//   }

//Post using Axios
//(Where it's going to,  and the body/payload)
const response = await axios.post(BASE_URL, userData)
    if (response.status === 200) {
        return response.data
    } else {
        throw new Error('Invalid Sign Up')
    }
}