const CONDUCT_DATA = "CONDUCT_DATA";

const initialState = {
  data: [],
  loading: true
}

//Action creator
export function loadConduct(conduct) {
  return {
    type: CONDUCT_DATA,
    payload: conduct
  }
}

//Thunk
export function getConductData() {
  return function (dispatch) {
    fetch('https://r10app-95fea.firebaseio.com/code_of_conduct.json')
      .then(response => response.json())
      .then(data => {
        dispatch(loadConduct(data));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));    
  }
}

//Reducer
export function ConductRenderer(state = initialState, action) {
  switch(action.type) {
    case CONDUCT_DATA:
      return {
        ...state,
        data: action.payload
      };
      default: 
        return state;
  }
}