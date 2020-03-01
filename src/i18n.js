import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import resources from "./locales/resources";

const langMap = {
	"en-IN": "en",
	"fr": "fr"
}

i18n  
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: langMap[window.navigator.language],
    fallbackLng: 'en',

    keySeparator: '.',

    interpolation: {
      escapeValue: false // react already safes from xss
    },
    ns: ['messages'],
    defaultNS: 'messages'
  });

  export default i18n;