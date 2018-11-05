const apiUrl = "http://localhost:3030/api";

export const endpoints = {
  postLogin: {
    path: "/login",
    method: "POST"
  }
};

const success = async response => {
  return await response.json();
};

const failure = error => {
  return error;
};

export const Request = async (service, data={}) => {
  let body = true;
  endpoints[service].type === "POST" || "PUT" || "PATCH"
    ? body = true
    : body = false

  const dataRequest = {
    method: endpoints[service].method
  }

  if(body) dataRequest.body = data;

  return await fetch(`${apiUrl}${endpoints[service].path}`, dataRequest).then(response => success(response))
    .catch(error => failure(error));
};
