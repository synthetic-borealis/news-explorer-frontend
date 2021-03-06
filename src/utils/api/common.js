const handleApiResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(res);
};

export { handleApiResponse };
