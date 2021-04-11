const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.thecatapi.com";
const apiMap = {
  search: (page = 0) =>
    `/v1/images/search?size=full&mime_types=jpg&limit=20&page=${page}`,
};

export const request = (type, props) => {
  if (!type) {
    return;
  }
  let url = apiMap[type];
  if (typeof url === "function") {
    url = url(props);
  }
  const path = `${BASE_URL}${url}`;
  return fetch(path, {
    headers: {
      "x-api-key": API_KEY,
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(response.status);
  });
};
