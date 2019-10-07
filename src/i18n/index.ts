import Vue from 'vue'
import VueI18n from 'vue-i18n'
import * as Storage from '@utils/storage'

Vue.use(VueI18n)

const localeKeys: string[] = []

interface Messages {
  [prop: string]: any
}

const {
  VUE_APP_I18N_LOCALE = 'zh',
  VUE_APP_I18N_FALLBACK_LOCALE = 'zh',
} = process.env

function loadLocaleMessages () {
  const locales = require.context('./lang', true, /[A-Za-z0-9-_,\s]+\.ts$/i)
  const messages: Messages = {}

  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)

    if (matched && matched.length > 1) {
      const locale = matched[1]

      messages[locale] = locales(key).default || locales(key)
      localeKeys.push(locale)
    }
  })
  return messages
}

const i18n = new VueI18n({
  locale: Storage.getLanguage() || VUE_APP_I18N_LOCALE,
  fallbackLocale: VUE_APP_I18N_FALLBACK_LOCALE,
  messages: loadLocaleMessages(),
})

export {
  i18n as default,
  localeKeys,
}
