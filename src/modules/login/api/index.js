const apiUrl = "http://localhost:3030/api";

export const endpoints = {
  postLogin: {
    uri: "/login",
    method: "POST"
  }
};

const success = async response => {
  return await response.json();
};
const failure = error => {
  return error;
};

export const loginCheck = async (userData = {}) => {
  return await fetch(`${apiUrl}${endpoints.postLogin.uri}`, {
    method: endpoints.postLogin.method,
    body: userData
  })
    .then(response => success(response))
    .catch(error => failure(error));
};
