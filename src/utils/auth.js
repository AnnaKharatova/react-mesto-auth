export const BASE_URL = 'https://auth.nomoreparties.co';


const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
    return Promise.reject(res.status);
}

export const register = (email, password) => {
  return fetch('https://auth.nomoreparties.co/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
     password, email 
    })
  })
  .then(checkResponse)
};

export const authorize = (email, password) => {
  return fetch('https://auth.nomoreparties.co/signin', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(checkResponse)
}

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    }).then((response) => {
        return response.json();
      })
      .then((res) => {
        return res;
      })
    };
  