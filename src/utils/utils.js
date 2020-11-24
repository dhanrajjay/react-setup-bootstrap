import * as CONST from './constant.js';

export function getLangList(lang, key) {
    return CONST[key][lang];
}