export function textTrim(text, limit) {
  if (!text) return "";
  if (text.length <= limit) return text;

  const trimmed = text.slice(0, limit);
  return trimmed.slice(0, trimmed.lastIndexOf(" ")) + "...";
}

export function isMedia(query) {
  return window.matchMedia(query).matches;
}

export function onMediaQuery(query, callback) {
  const mql = window.matchMedia(query);

  const handleChange = (e) => {
    if (e.matches) callback();
  };

  if (mql.matches) callback();

  mql.addEventListener("change", handleChange);
  return () => mql.removeEventListener("change", handleChange);
}

