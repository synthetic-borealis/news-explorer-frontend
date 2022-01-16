import { apiHandleResponse } from "./common";
import { newsApiOptions } from "../constants";

const search = (query) => {
  let currentDate = new Date();
  let pastDate = new Date();
  pastDate.setDate(currentDate.getDate() - 7);

  currentDate = currentDate.toISOString().split("T")[0];
  pastDate = pastDate.toISOString().split("T")[0];

  const searchParams = new URLSearchParams({
    q: query,
    from: pastDate,
    to: currentDate,
    apiKey: newsApiOptions.apiKey,
    pageSize: 100,
    language: "en",
  });

  const url = `${newsApiOptions.baseUrl}?${searchParams.toString()}`;

  return fetch(`${url}`, {
    method: "GET",
  }).then(apiHandleResponse);
};

export { search };
