// We will use a src/utilities/users-service.js module to organize functions used to sign-up, log in, log out, etc.
// The users-service.js module will definitely need to make AJAX requests to the Express server.


//import everything from usersAPI into this file
import * as usersAPI from './users-api';

//signupform.js - handleSubmit
export async function signUp(userData) {
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    //to verify user is logged in
    const token = await usersAPI.signUp(userData);
    // Baby step by returning whatever is sent back by the server
    return token;
  }