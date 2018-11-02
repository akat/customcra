const apiUrl = "http://localhost:3030/api"

export const endpoints = {
    postLogin: {
        uri: "/login",
        method: 'POST'
    }
}

export const loginCheck = async (userData = {}) => {
    
    let data = { 
        method: endpoints.postLogin.method, 
        body: userData
    }

    const response = await fetch(`${apiUrl}${endpoints.postLogin.uri}`, data);
    return await response.json()
}