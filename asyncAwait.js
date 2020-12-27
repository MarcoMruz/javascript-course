'use strict';

// async function f() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("done"), 1000);
//     });

//     let result = await promise;

//     console.log( result );
// }

// f();

class HttpError extends Error {
    constructor(response) {
        super( `${response.status} for ${response.url}` );
        this.name = "HTTPError";
        this.response = response;
    };
};

async function loadJson(url) {
    let response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    }

    throw new HttpError(response.status);
}

async function demoGithubUser() {

  let user;
  while(true) {
    let name = prompt("Enter a name?", "iliakan");

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // no error, exit loop
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        // loop continues after the alert
        alert("No such user, please reenter.");
      } else {
        // unknown error, rethrow
        throw err;
      }
    }
  }


  alert(`Full name: ${user.name}.`);
  return user;
}
  
demoGithubUser();

// calling async in non-async function
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then(result => console.log(result));
}

f();
