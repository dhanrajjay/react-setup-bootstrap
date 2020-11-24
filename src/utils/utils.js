import * as CONST from './constant.js';

export function getLangList(lang, key) {
    if (!CONST[key]) {
        return sessionStorage.getItem(key);
    }
    return CONST[key][lang];
}