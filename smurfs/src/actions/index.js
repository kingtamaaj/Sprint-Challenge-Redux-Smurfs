import axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';



export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.get('http://localhost:3333/smurfs')
      .then( response => {
        dispatch({type: SUCCESS, smurfs: response.data})
      })
      .catch( err => {
        dispatch({type: ERROR, payLoad: 'Trouble retrieving smurfs'})
      })
  }
}

export const createSmurf = (newSmurf) => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.post('http://localhost:3333/smurfs', newSmurf)
      .then( response => {
        dispatch({type: SUCCESS, smurfs: response.data})
      })
      .catch( err => {
        dispatch({type: ERROR, payLoad: 'Trouble adding smurf'})
      })
  }
} 