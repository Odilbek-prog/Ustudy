import uzb from "../public/locales/uzb.json";
import turk from "../public/locales/turk.json";
import eng from "../public/locales/eng.json";
import china from "../public/locales/china.json";

const languages = {
  uzb,
  turk,
  eng,
  china,
};

export const getText = (lang, key) => {
  return languages[lang][key] || key;
};
