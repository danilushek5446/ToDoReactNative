import { I18n } from 'i18n-js';

import en from 'src/translations/en.json';
import ru from 'src/translations/ru.json';

const MyI18n = new I18n({
  ...ru,
  ...en,
});

MyI18n.defaultLocale = 'en';

MyI18n.translations = {
  en,
  ru,
};

export default MyI18n;
