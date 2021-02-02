import LocalizedStrings from 'react-native-localization';
import english from './languages/en'
import hebrew from './languages/hr'
import arabic from './languages/ar'

const strings = new LocalizedStrings({
  en: english,
  iw: hebrew,
  ar: arabic,
});

export default strings;
