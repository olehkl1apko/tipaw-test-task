export const currentLanguage = () => {
  type CurrentLanguage = "fr" | "en" | "nl";

  const storedLanguage = localStorage.getItem("language") || "en";
  return storedLanguage as CurrentLanguage;
};
