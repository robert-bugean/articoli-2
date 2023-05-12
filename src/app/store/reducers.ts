import { createReducer, on } from '@ngrx/store';
import { AppState } from "./app.state";

const initialState: AppState = {
  articles: [],
};

export const appReducer = createReducer(
    initialState,
    // 
    // 
)