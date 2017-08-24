import { formatDataObject } from '../../lib/dataFormatHelpers';

const SESSION_DATA = "SESSION_DATA";

const initialState = {
  loading: true,
  speaker: []  
}

export function loadSpeaker(sessionData) {
  return {
    type: SESSION_DATA,
    payload: sessionData
  }
}

export function getSessionData(speakerID) {
  return function (dispatch) {
    let endpoint = `https://r10app-95fea.firebaseio.com/speakers.json?orderBy=%22speaker_id%22&equalTo=%22${speakerId}%22`;
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const newData = formatDataObject(data);
        dispatch(loadSpeaker(newData));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }
}

export function SessionRenderer(state = initialState, action) {
  switch(action.type) {
    case SESSION_DATA:
      return {
        ...state,
        speaker: action.payload,
        loading: false
      };
      default:
        return state;
  }
}