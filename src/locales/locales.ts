import { pick } from 'in-browser-language';

export const messages: Record<string, Record<string, string>> = {
  'ca-ES': require('./lang/ca-ES.json'),
  cs: require('./lang/cs.json'),
  de: require('./lang/de.json'),
  el: require('./lang/el.json'),
  en: {},
  'en-AU': require('./lang/en-AU.json'),
  'en-GB': require('./lang/en-GB.json'),
  es: require('./lang/es.json'),
  fr: require('./lang/fr.json'),
  gu: require('./lang/gu.json'),
  hi: require('./lang/hi.json'),
  hu: require('./lang/hu.json'),
  id: require('./lang/id.json'),
  it: require('./lang/it.json'),
  ja: require('./lang/ja.json'),
  ko: require('./lang/ko.json'),
  nl: require('./lang/nl.json'),
  no: require('./lang/no.json'),
  ro: require('./lang/ro.json'),
  ru: require('./lang/ru.json'),
  sk: require('./lang/sk.json'),
  sv: require('./lang/sv.json'),
  pl: require('./lang/pl.json'),
  pt: require('./lang/pt.json'),
  'pt-BR': require('./lang/pt-BR.json'),
  tr: require('./lang/tr.json'),
  vi: require('./lang/vi.json'),
  zh: {},
  'zh-CN': require('./lang/zh-CN.json'),
  'zh-TW': require('./lang/zh-TW.json'),
  uk: require('./lang/uk.json'),
};

export const locales = Object.keys(messages);
export const defaultLocale = pick(locales, 'en');
