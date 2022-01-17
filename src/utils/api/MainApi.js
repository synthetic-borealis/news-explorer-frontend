import { authApiOptions, authApiRoutes } from "../constants";
import { handleApiResponse } from "./common";

const signup = ({ email, password, name }) => {
  return fetch(`${authApiOptions.baseUrl}${authApiRoutes.signup}`, {
    method: "POST",
    headers: authApiOptions.baseHeaders,
    body: JSON.stringify({ email, password, name }),
  }).then(handleApiResponse);
};

const signin = ({ email, password }) => {
  return fetch(`${authApiOptions.baseUrl}${authApiRoutes.signin}`, {
    method: "POST",
    headers: authApiOptions.baseHeaders,
    body: JSON.stringify({ email, password }),
  }).then(handleApiResponse);
};

const getUserInfo = (token) => {
  return fetch(`${authApiOptions.baseUrl}${authApiRoutes.getUserInfo}`, {
    method: "GET",
    headers: {
      ...authApiOptions.baseHeaders,
      "Authorization": `Bearer ${token}`,
    },
  }).then(handleApiResponse);
};

const getArticles = (token) => {
  return fetch(`${authApiOptions.baseUrl}${authApiRoutes.articles}`, {
    method: "GET",
    headers: {
      ...authApiOptions.baseHeaders,
      "Authorization": `Bearer ${token}`,
    },
  }).then(handleApiResponse);
};

const addArticle = ({ keyword, title, text, date, source, link, image }, token) => {
  return fetch(`${authApiOptions.baseUrl}${authApiRoutes.articles}`, {
    method: "POST",
    headers: {
      ...authApiOptions.baseHeaders,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ keyword, title, text, date, source, link, image }),
  }).then(handleApiResponse);
};

const deleteArticle = (articleId, token) => {
  return fetch(
    `${authApiOptions.baseUrl}${authApiRoutes.articles}/${articleId}`,
    {
      method: "DELETE",
      headers: {
        ...authApiOptions.baseHeaders,
        Authorization: `Bearer ${token}`,
      },
    }
  ).then(handleApiResponse);
};

export { signup, signin, getUserInfo, getArticles, addArticle, deleteArticle };
