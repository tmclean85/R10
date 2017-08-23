const SCHEDULE_DATA = "SCHEDULE_DATA";

const initialState = {
  data: []
}

export function loadSchedule(schedule) {
  return {
    type: SCHEDULE_DATA,
    payload: schedule
  }
}

export function getScheduleData() {
  return function (dispatch) {
    fetch('https://r10app-95fea.firebaseio.com/sessions.json')
      .then(response => response.json())
      .then(data => {
        dispatch(loadSchedule(data));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }
}

export function ScheduleRenderer(state = initialState, action) {
  switch(action.type) {
    case SCHEDULE_DATA:
      return {
        ...state,
        data: action.payload
      };
      default:
        return state;
  }
}