const apiHandleResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(res);
};

export { apiHandleResponse };
