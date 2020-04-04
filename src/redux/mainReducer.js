import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth25723Reducer from '../features/EmailAuth25723/redux/reducers';
import CalendarView25721Reducer from '../features/CalendarView25721/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth25723: EmailAuth25723Reducer,
CalendarView25721: CalendarView25721Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});