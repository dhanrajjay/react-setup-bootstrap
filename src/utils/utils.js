import * as CONST from './constant.js';
import React from "react";

export function getLangList(lang, key) {
    if (!CONST[key]) {
        if (!sessionStorage.getItem(key)) {
            return fetchAPI(API_KEY_MAP[key]);
        }
        return sessionStorage.getItem(key);
    }
    return CONST[key][lang];
}

const fetchAPI = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

const API_KEY_MAP = {
    'people': 'https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people',
    'mohan': 'https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/mohan'
}