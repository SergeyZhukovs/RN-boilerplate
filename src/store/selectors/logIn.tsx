export const selectToken = ({ logIn: { token } }: any): string | null  => token;

export const selectIsBusiness = ({ logIn: { isBusiness } }: any): boolean => isBusiness;

export const selectLogInForm = ({ logIn: { logInForm } }: any): {} => logInForm;

export const selectUserId = ({ logIn: { userId } }: any): number => userId;

export const selectLan = ({ logIn: { lang } }: any): number => lang;

export const selectForgotPassEmail = ({ logIn: { forgotPassEmail } }: any): string => forgotPassEmail;

export const selectLoginMethod = ({ logIn: { social } }: any): boolean => social;