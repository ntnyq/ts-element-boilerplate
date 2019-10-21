import {
  Module,
  ActionTree,
  MutationTree,
} from 'vuex'
import * as types from '../mutation-types'
import * as Storage from '@/utils/storage'
import routers from '@/router/routes'
import { AppRouteConfig } from '@/typings'

const namespaced: boolean = true

interface AppState {
  routers: AppRouteConfig[];
  language: string;
  isCollapse: boolean;
}

const state: AppState = {
  routers,
  language: Storage.getLanguage() || 'zh',
  isCollapse: false,
}

const actions: ActionTree<AppState, {}> = {
  toggleCollapse ({ commit }) {
    commit(types.TOGGLE_COLLAPSE)
  },

  setLanguage ({ commit }, language: string) {
    commit(types.SET_LANGUAGE, language)

    Storage.setLanguage(language)
  },
}

const mutations: MutationTree<AppState> = {
  [types.TOGGLE_COLLAPSE] (state: AppState) {
    state.isCollapse = !state.isCollapse
  },

  [types.SET_LANGUAGE] (state: AppState, language: string) {
    state.language = language
  },
}

const app: Module<AppState, {}> = {
  namespaced,
  state,
  actions,
  mutations,
}

export default app
