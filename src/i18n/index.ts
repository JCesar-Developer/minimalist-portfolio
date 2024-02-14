import en from './en';
import es from './es';

enum LANGUAGES {
  ENGLISH = 'en',
  SPANISH = 'es',
}

export const getI18N = ({ currentLocale = 'en' }: { currentLocale: string | undefined }) => {
  switch (currentLocale) {
    case LANGUAGES.ENGLISH:
      return en;
    case LANGUAGES.SPANISH:
      return es;
    default:
      return en;
  }
}