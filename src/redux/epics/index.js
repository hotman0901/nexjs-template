import { combineEpics } from 'redux-observable';
import gameEpic from '@redux/epics/game';

const rootEpic = combineEpics(...gameEpic);

export default rootEpic;
