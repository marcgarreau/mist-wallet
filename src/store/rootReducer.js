import { combineReducers } from 'redux'

import accounts from './accounts/reducer'
import exchangeRates from './exchangeRates/reducer'
import network from './network/reducer'

const root = combineReducers({
  accounts,
  exchangeRates,
  network
})

export default root
