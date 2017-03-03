import createReducer from '../Lib/createReducer'
import * as types from '../Actions/types'

export const recipeCount = createReducer(5,
{
  [types.ADD_RECIPE](state, action){
    console.log(action.number)
    state = state + action.number;
    return state;
  }
}
);
