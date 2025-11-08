const FALLBACK_LINKEDIN_URL = "https://www.linkedin.com/in/sergio-pallazhco-024871218/";

export const LINKEDIN_URL = (import.meta.env.VITE_URL_LINKEDIN || "")
  .toString()
  .trim() || FALLBACK_LINKEDIN_URL;
