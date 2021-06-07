import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  'en': {},
  'cn': {}
};

interface I18nConfig {
  locale: string;
  fallbackLocale: string;
  messages: {
    'en': string,
    'cn': string
  };
}

const i18n: I18nConfig = new VueI18n({
  locale: 'en',
  fallbackLocale: 'cn',
  messages
})


export default i18n;