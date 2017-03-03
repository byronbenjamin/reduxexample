import * as types from './types'
import Api from '../Lib/api'
//dispatch method sends the message out to the app
//getState method give us access to the entire state of our app at the point that this is called. so all the reducers etc...

export function addReciper(number){
  return {
    type: types.ADD_RECIPE,
    number
  }
}
