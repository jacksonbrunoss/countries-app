export const API_URL = "https://restcountries.com/v3.1";

export function GET_COUNTRIES() {
  return {
    url: API_URL + "/all",
    options: {
      method: "GET",
    },
  };
}
export function GET_SEARCH(isSearch) {
  return {
    url: API_URL + `/name/${isSearch}`,
    options: {
      method: "GET",
    },
  };
}
