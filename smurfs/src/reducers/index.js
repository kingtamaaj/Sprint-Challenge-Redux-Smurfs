import { LOADING, SUCCESS, ERROR } from '../actions/index';


 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   fetchingSmurfs: false,
   error: null
 }


export default (state=initialState, action) => {
  switch(action.type){
    case LOADING:
      return {...state, fetchingSmurfs: true}
    case SUCCESS:
      return {...state, smurfs: action.smurfs, fetchingSmurfs: false, error: null}
    case  ERROR:  
      return {...state, error: action.payLoad, fetchingSmurfs: false}
    default:
      return state
  }
} 