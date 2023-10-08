import axios from "axios";
const url = "https://65202116906e276284c4124c.mockapi.io/api/products";

export const getPost = () => {
  return fetch(`${url}/List`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const getPostWithId = (id) => {
  return fetch(`${url}/List/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const sendPostData = (data) => {
  return fetch(`${url}/List/${data.id}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
