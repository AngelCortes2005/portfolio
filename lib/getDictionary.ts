import 'server-only';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  es: () => import('@/dictionaries/es.json').then((module) => module.default),
} as const;

export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale) => {
  const dictionary = await dictionaries[locale]();
  return dictionary;
};