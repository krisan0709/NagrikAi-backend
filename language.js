let currentLang = "en";

const TEXT = {
  en: {
    searchPlaceholder: "Search (income, aadhaar, pan...)",
    title: "Explore Government Services Easily"
  },
  hi: {
    searchPlaceholder: "खोजें (आय, आधार, पैन...)",
    title: "सरकारी सेवाएं आसानी से खोजें"
  }
};

function toggleLanguage() {
  currentLang = currentLang === "en" ? "hi" : "en";
  document.getElementById("search").placeholder = TEXT[currentLang].searchPlaceholder;
  document.getElementById("subtitle").innerText = TEXT[currentLang].title;
}