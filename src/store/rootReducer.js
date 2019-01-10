import { combineReducers } from 'redux'

import accounts from './accounts/reducer'
import exchangeRates from './exchangeRates/reducer'
import network from './network/reducer'
import notifications from './notifications/reducer'

const root = combineReducers({
  accounts,
  exchangeRates,
  network,
  notifications
})

export default root
