import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth25723Saga from '../features/EmailAuth25723/redux/sagas';
import CalendarView25721Saga from '../features/CalendarView25721/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth25723Saga,
CalendarView25721Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}