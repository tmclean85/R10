import { formatSessionData } from '../../lib/dataFormatHelpers';
import { getFaves } from '../../config/model';

const FAVES_DATA = "FAVES_DATA";
const FAVE_IDS = "FAVE_IDS";

const initialState = {
  faveData: [],
  faveIds: [],
  loading: true
}

function newFave(faveData) {
  return {
    type: FAVES_DATA,
    payload: faveData
  }
}

function setFaveIds(faveIds) {
  return {
    type: FAVE_IDS,
    payload: faveIds
  }
}

export function getFavesData() {
  return function(dispatch) {
    const faveData = getFaves();
    fetch(`https://r10app-95fea.firebaseio.com/sessions.json`)
    .then(response => response.json())
    .then(data => {
      const faveFilter = data.filter(item => faveData.find(fave => fave.id === item.session_id));
      const faveIds = faveFilter.map(fave => fave.session_id);
      dispatch(setFaveIds(faveIds))
      const newData = formatSessionData(faveFilter);
      dispatch(newFave(newData))
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
}

export function FavesRenderer(state = initialState, action) {
  switch (action.type) {
    case FAVES_DATA:
      return {
        ...state,
        loading: false,
        faveData: action.payload
      }
    case FAVE_IDS: 
      return {
        ...state,
        loading: false,
        faveIds: action.payload
      }  
    default:
      return state  
  }
}