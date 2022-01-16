const routePaths = {
  home: "/",
  savedNews: "/saved-news",
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const popupContentTypes = {
  signIn: 0,
  signUp: 1,
  success: 2,
};

const maxMobileWidth = 680;

const errorMessages = {
  badCredentials: "Unknown e-mail or password",
  emailNotAvailable: "This email is not available",
  otherError: "Unknown error",
};

const authApiOptions = {
  baseUrl: "http://localhost:4000",
  baseHeaders: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const authApiRoutes = {
  signup: "/signup",
  signin: "/signin",
  articles: "/articles",
  getUserInfo: "/users/me",
};

const newsApiOptions = {
  baseUrl: "https://newsapi.org/v2/everything",
  apiKey: "52577bb4acc740bfa7800825111f4d17",
};

const searchStorageKeys = {
  query: "searchQuery",
  results: "searchResults",
  keyword: "searchKeyword",
};

export {
  routePaths,
  monthNames,
  popupContentTypes,
  maxMobileWidth,
  errorMessages,
  authApiOptions,
  authApiRoutes,
  newsApiOptions,
  searchStorageKeys,
};
