import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView25721Reducer from '../features/CalendarView25721/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView25721: CalendarView25721Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});