const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.thecatapi.com';
const apiMap = {
    search: '/v1/images/search?size=full&limit=20'
};

export const request = (type) => {
    if (!type) {
        return;
    }

    const path = `${BASE_URL}${apiMap[type]}`;
    return fetch(path, {
        headers: {
            'x-api-key': API_KEY,
        }
    }).then((response) => {
        // todo proverka
        return response.json();
    });
}
