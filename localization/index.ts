import Contact from "./pages/contact"
import Home from "./pages/home"

type pageType = "contact" | "home";

function Localization(page: pageType, lang: string|undefined) {

    let text:any;
    switch(page){
        case "contact":
            text = Contact; break;
        case "home":
            text = Home; break;
    }

    switch (lang?.substring(0, 2)) {
      case "tr":
        return text.tr;
      case "en":
        return text.en;
      default:
        return browserLang();
    }

    function browserLang() {
      if (
        typeof window !== "undefined" &&
        typeof window.navigator !== "undefined"
      ) {
        if (navigator.language.toLowerCase().startsWith("tr")) return text.tr;
      }

      return text.en;
    }

}

export default Localization;