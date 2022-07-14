import axios from "axios";
import { apiKey } from "./apiInfo";
import { baseURL } from "./apiInfo";

export const random = async () => {
  return axios
    .get(`${baseURL}/recipes/random?number=6&apiKey=${apiKey}`)
    .then((response) => {
      return response.data.recipes;
    })
    .catch((e) => {
      return e;
    });
};

export const vegan = async () => {
  return axios
    .get(`${baseURL}/recipes/random?number=6&tags=vegetarian&apiKey=${apiKey}`)
    .then((response) => {
      return response.data.recipes;
    })
    .catch((e) => {
      return e;
    });
};

export const search = async (term) => {
  return axios
    .get(`${baseURL}/recipes/complexSearch?query=${term}&apiKey=${apiKey}`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      return e;
    });
};

export const instructions = async (id) => {
  return axios
    .get(`${baseURL}/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      return e;
    });
};

export const ingredients = async (id) => {
  return axios
    .get(`${baseURL}/recipes/${id}/information?apiKey=${apiKey}`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      return e;
    });
};
