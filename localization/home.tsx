
const HomeLocalization = (lang?:string) => {

  const text = {
    en: {
      cards: [
        {
          title: "Enhance your app with style",
          content:
            "Bring some fun to your work with warm colors and cool layouts",
        },
        {
          title: "Express yourself better",
          content: "Bring more depth to your blog with your tastes",
        },
        {
          title: "Impress your customers",
          content: "Polish your storefront with modern and suitable designs",
        },
      ],
    },
    tr: {
        //TODO
      cards: [
        {
          title: "Uygulamanızın tarzını öne çıkarın",
          content:
            "İlginç tasarımlar ve sevimli renklerle işinize eğlence katın",
        },
        {
          title: "Kendinizi daha iyi belirtin",
          content: "Zevklerinizi katarak blog'unuzu daha derinleştirin",
        },
        {
          title: "Müşterilerinizi etkileyin",
          content: "Vitrininizi modern ve uyumlu stillerle tazeleyin",
        },
      ],
    },
  };

  switch(lang?.substring(0,2)){
    case "tr":
        return text.tr;
    case "en":
        return text.en;
    default:
        return browserLang();
  }

  function browserLang(){

    if (
      typeof window !== "undefined" &&
      typeof window.navigator !== "undefined"
    ) {
      if (navigator.language.toLowerCase().startsWith("tr"))
        return text.tr;
    }

    return text.en;

  }
  
};

export default HomeLocalization;
