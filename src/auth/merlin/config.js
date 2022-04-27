// Add here the endpoints and scopes for the web API you would like to use.

let baseURL = process.env.REACT_APP_BASEURL;

export const apiConfig = {
  uri: baseURL, // e.g. http://localhost:5000/api
  joburi: baseURL + "jobs",
  greetingsuri: baseURL + "greetings",
  scopes: [process.env.REACT_APP_SCOPE], // e.g. ["scp1", "scp2"]
};

export const tokenRequest = {
  scopes: [...apiConfig.scopes],
};
