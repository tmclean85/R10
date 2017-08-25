import { formatDataObject } from '../../lib/dataFormatHelpers';

const SPEAKER_DATA = "SPEAKER_DATA";

const initialState = {
  loading: true,
  speakerData: {}
}

export function loadSpeaker(speakerData) {
  return {
    type: SPEAKER_DATA,
    payload: speakerData
  }
}

export function getSpeakerData(speakerId) {
  return function (dispatch) {
    let endpoint = `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const newData = formatDataObject(data);
        dispatch(loadSpeaker(newData));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }
}

export function SpeakerRenderer(state = initialState, action) {
  switch(action.type) {
    case SPEAKER_DATA:
      return {
        ...state,
        speakerData: action.payload,
        loading: false
      };
      default:
        return state;
  }
}