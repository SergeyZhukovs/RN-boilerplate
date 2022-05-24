import { createReducer } from "@reduxjs/toolkit";
import { setUserInfo } from "./actions";

type IUser = {
    email: string | null;
    uid?: string | null;
};

const initialState: IUser = {
    email: null,
    uid: null,
};

export const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(setUserInfo, (state, { payload }) => {
        state.email = payload;
    });
});
