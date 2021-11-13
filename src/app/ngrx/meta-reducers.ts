import { ActionReducer, MetaReducer } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";

export function loggerMetaReducer(reducer) {
    return function newReducer(state, action) {
        console.group(action.type);
        const nextState = reducer(state, action);
        console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state);
        console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
        console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);
        console.groupEnd();
        return nextState;
    }
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({keys: ['todos']})(reducer);
  }

export const metaReducers: MetaReducer<any>[] = [localStorageSyncReducer, loggerMetaReducer];