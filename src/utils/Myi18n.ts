import { I18n } from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from 'src/translations/en.json';
import ru from 'src/translations/ru.json';

const locales = RNLocalize.getLocales();

const Myi18n = new I18n({
  ...ru,
  ...en,
});

Myi18n.defaultLocale = 'en';

if (Array.isArray(locales)) {
  Myi18n.locale = locales[0].languageCode;
}

Myi18n.translations = {
  en,
  ru,
};

export default Myi18n;
