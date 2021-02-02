import images from '../helpers/ImagesPath';

export const appLanguages = [
  {
    key: 'en',
    language: 'english',
    isRTL: false,
    languageImage: images.engLangIcon,
  },
  {
    key: 'iw',
    language: 'hebrew',
    isRTL: true,
    languageImage: images.herbrewLangIcon,
  },
  {
    key: 'ar',
    language: 'arabic',
    isRTL: true,
    languageImage: images.arabicLangIcon,
  },
]

export const appThemes = [
  { themeName: 'DARK' },
  { themeName: 'LIGHT' },
]

export const appFontSizes = [
  { fontSizeUnit: 'SMALL' },
  { fontSizeUnit: 'REGULAR' },
  { fontSizeUnit: 'LARGE' },
  { fontSizeUnit: 'EXTRA' },
]

export const appGeneralInfo = {
  'APP VERSION': '0.0.1 alpha',
  OS: 'ANDROID',
  MANUFACTURE: 'GOOGLE',
}

export const appHomeScreenSections = [
  {
    prefixName: 'RINGO', suffixName: 'BOT', subTitle: 'REAL EASTATE BOT', icon: images.realEstateBotIcon,
  },
  {
    prefixName: 'RINGO', suffixName: 'BOOK', subTitle: 'SIGNUTURES APP', icon: images.signatureTabletIcon,
  },
  {
    prefixName: 'RINGO', suffixName: 'SERVICE', subTitle: 'CONTACT US', icon: images.contactUsIcon,
  },
]

export const appDrawerMenu = [
  { name: 'Dashboard', icon: images.dashboardIcon },
  { name: 'My Profile', icon: images.myProfileIcon },
  { name: 'My Company', icon: images.myCompanyIcon },
]
export const getLanguageObject = (lang) => appLanguages?.filter((item) => item?.language === lang)[0]
