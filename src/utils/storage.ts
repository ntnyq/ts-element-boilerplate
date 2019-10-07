import Cookies from 'js-cookie'
import {
  APP_LANGUAGE_KEY,
} from '@constants/storage-key'

export function getLanguage () {
  return Cookies.get(APP_LANGUAGE_KEY)
}

export function setLanguage (language: string) {
  return Cookies.set(APP_LANGUAGE_KEY, language)
}

export function removeLanguage () {
  return Cookies.remove(APP_LANGUAGE_KEY)
}
