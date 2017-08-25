import { formatSessionData } from '../../lib/dataFormatHelpers';


const SESSION_DATA = "SESSION_DATA";

const initialState = {
  sessionData: [],
  loading: true
}

export function loadSchedule(schedule) {
  return {
    type: SESSION_DATA,
    payload: schedule
  }
}

export function getSessionData() {
  return function (dispatch) {
    fetch('https://r10app-95fea.firebaseio.com/sessions.json')
      .then(response => response.json())
      .then(data => {
        const newData = formatSessionData(data);
        dispatch(loadSchedule(newData));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }
}

export function ScheduleRenderer(state = initialState, action) {
  switch(action.type) {
    case SESSION_DATA:
      return {
        ...state,
        sessionData: action.payload,
        loading: false
      };
      default:
        return state;
  }
}