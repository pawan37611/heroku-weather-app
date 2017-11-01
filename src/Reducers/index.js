import { combineReducers } from 'redux';
import weatherReducer from './weather-reducer'
import locationReducer from './location-reducer'
const rootReducer = combineReducers({
  location:locationReducer,
  weather:weatherReducer
});

export default rootReducer;


