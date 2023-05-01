import langEn from "./langEn.js";
import langRu from "./langRu.js";

function currentLang(lang){
    return lang === "en" ? langEn : langRu;
}

export default currentLang;