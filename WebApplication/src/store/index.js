import { createStore, createLogger } from 'vuex'
import configuration from './modules/configuration'
import studies from './modules/studies'
import session from './modules/session'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    studies,
    configuration,
    session
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})