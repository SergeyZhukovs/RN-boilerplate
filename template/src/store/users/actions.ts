import { createAction } from "@reduxjs/toolkit";

export const setUserInfo = createAction(
    "@user/SET_USER_INFO",
    (user: any) => {
        return {
            payload: user,
        };
    }
);
