import i18n from "i18next";
import { initReactI18next } from "react-i18next"
import en from "../locales/I18n/en.json";
import arab from "../locales/I18n/arab.json";
import kur from "../locales/I18n/kur.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: { en, arab, kur},
  lng: "en",
  defaultNS: "common",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  cleanCode: true,
});

export default i18n;
