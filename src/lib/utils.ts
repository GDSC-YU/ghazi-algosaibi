import localFont from "next/font/local";

export function normalizeArabic(text: string) {
  // Remove Arabic diacritics (harakat)
  const removeDiacritics = text.replace(/[\u064B-\u0652]/g, "");

  // Normalize ALEF forms (with and without Hamza)
  const normalizeAlef = removeDiacritics.replace(
    /[\u0622\u0623\u0625]/g,
    "\u0627",
  );

  // Normalize Hamza forms (on Waw and Yeh)
  const normalizeHamza = normalizeAlef.replace(/[\u0624\u0626]/g, "\u0648");

  // Normalize Taa Marbouta to Haa
  const normalizeTaaMarbouta = normalizeHamza.replace(/\u0629/g, "\u0647");

  // Normalize Alif Maqsura to Ya
  const normalizeAlifMaqsura = normalizeTaaMarbouta.replace(
    /\u0649/g,
    "\u064A",
  );

  // Normalize different forms of the letter Yaي
  const normalizeYa = normalizeAlifMaqsura.replace(/[\u064A\u06CC]/g, "\u064A");

  // Remove Kashida (Tatweel)
  const removeKashida = normalizeYa.replace(/\u0640/g, "");

  // Normalize White Spaces
  const normalizeWhiteSpaces = removeKashida.replace(/\s+/g, " ").trim();

  return normalizeWhiteSpaces;
}

export const sfArabicRounded = localFont({
  src: "../app/fonts/SF-Arabic-Rounded.ttf",
});
