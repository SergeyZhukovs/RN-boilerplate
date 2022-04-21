import * as types from "../constants/logIn";
import { fetchProfile } from "../../services";
import { changeForm } from "@store/actions/registerForm";
import { setMessage, setStatus, setVisibility } from "./modalStatus";

export const setToken = (data: string) => ({
  type: types.SET_TOKEN,
  data,
});

export const setBusiness = (data: any) => ({
  type: types.SET_BUSINESS,
  data,
});

export const setLogInForm = (data: any) => ({
  type: types.SET_FORM,
  data,
});

export const setUserId = (data: number) => ({
  type: types.SET_USER_ID,
  data,
});

export const changeLang = (data: string) => ({
  type: types.SET_LANG,
  data,
});

export const setloginMethod = (data: string) => ({
  type: types.SET_LOGIN_METHOD,
  data,
});

export const setForgotPassEmail = (data: string) => ({
  type: types.SET_FORGOT_PASS_EMAIL,
  data,
});

export const getProfileData = (
  token: string | null,
  errorCallBack: () => void,
  succeesCallBack?: () => void
) => {
  return async (dispatch) => {
    try {
      const { data } = await fetchProfile(token);

      if (data.status === "ok") {
        const formData = data.data;
        dispatch(
          changeForm({
            email: formData.email,
            repeatEmail: formData.email,
            surname: formData.lastname,
            name: formData.name,
            phone: formData.phone,
            ads: data.ads,
            logo: formData.logo,
            businessName: formData.company_name,
            created: formData.created,
            credit: formData.credits,
          })
        );
        dispatch(setBusiness(formData.type === "company"));
        succeesCallBack && succeesCallBack();
      } else {
        dispatch(setStatus(data.status));
        dispatch(setMessage(data.message));
        dispatch(setVisibility(true));

        dispatch(setloginMethod(false));
        dispatch(setToken(null));
        await errorCallBack();
      }
    } catch (e) {
      console.log(e.response, "error");
      dispatch(setloginMethod(false));
      dispatch(setToken(null));
      await errorCallBack();
    }
  };
};
