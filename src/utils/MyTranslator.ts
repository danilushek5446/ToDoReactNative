import { I18n } from 'i18n-js';

import en from 'src/translations/en.json';
import ru from 'src/translations/ru.json';

const MyTranslator = new I18n({
  ...ru,
  ...en,
});

MyTranslator.defaultLocale = 'en';

MyTranslator.translations = {
  en,
  ru,
};

export default MyTranslator;
