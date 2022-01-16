import { authApiOptions, authApiRoutes } from "../constants";
import { apiHandleResponse } from "./common";

const signup = ({ email, password, name }) => {
  return fetch(`${authApiOptions.baseUrl}${authApiRoutes.signup}`, {
    method: "POST",
    headers: authApiOptions.baseHeaders,
    body: JSON.stringify({ email, password, name }),
  }).then(apiHandleResponse);
};

const signin = ({ email, password }) => {
  return fetch(`${authApiOptions.baseUrl}${authApiRoutes.signin}`, {
    method: "POST",
    headers: authApiOptions.baseHeaders,
    body: JSON.stringify({ email, password }),
  }).then(apiHandleResponse);
};

const getUserInfo = (token) => {
  return fetch(`${authApiOptions.baseUrl}${authApiRoutes.getUserInfo}`, {
    method: "GET",
    headers: {
      ...authApiOptions.baseHeaders,
      "Authorization": `Bearer ${token}`,
    },
  }).then(apiHandleResponse);
};

const getArticles = (token) => {
  return fetch(`${authApiOptions.baseUrl}${authApiRoutes.articles}`, {
    method: "GET",
    headers: {
      ...authApiOptions.baseHeaders,
      "Authorization": `Bearer ${token}`,
    },
  }).then(apiHandleResponse);
};

const addArticle = ({ keyword, title, text, date, source, link, image }, token) => {
  return fetch(`${authApiOptions.baseUrl}${authApiRoutes.articles}`, {
    method: "POST",
    headers: {
      ...authApiOptions.baseHeaders,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ keyword, title, text, date, source, link, image }),
  }).then(apiHandleResponse);
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
  ).then(apiHandleResponse);
};

export { signup, signin, getUserInfo, getArticles, addArticle, deleteArticle };
