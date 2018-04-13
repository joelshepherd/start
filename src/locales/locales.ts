import * as browserLanguage from 'in-browser-language';
import { addLocaleData } from 'react-intl';
import * as deLocaleData from 'react-intl/locale-data/de';
import * as frLocaleData from 'react-intl/locale-data/fr';
import * as itLocaleData from 'react-intl/locale-data/it';
import * as koLocaleData from 'react-intl/locale-data/ko';
import * as plLocaleData from 'react-intl/locale-data/pl';
import * as plLocaleData from 'react-intl/locale-data/sp';
import * as trLocaleData from 'react-intl/locale-data/tr';
import * as zhLocaleData from 'react-intl/locale-data/zh';

// Add locale data
addLocaleData([
  ...deLocaleData,
  ...frLocaleData,
  ...itLocaleData,
  ...koLocaleData,
  ...plLocaleData,
  ...spLocaleData,
  ...trLocaleData,
  ...zhLocaleData,
]);

// Add translation data
export const messages = {
  en: {},
  de: require('./lang/de.json'),
  fr: require('./lang/fr.json'),
  it: require('./lang/it.json'),
  ko: require('./lang/ko.json'),
  pl: require('./lang/pl.json'),
  sp: require('./lang/sp.json'),
  tr: require('./lang/tr.json'),
  zh: require('./lang/zh.json'),
};

export const locales = Object.keys(messages);
export const defaultLocale = browserLanguage.pick(locales, 'en');
