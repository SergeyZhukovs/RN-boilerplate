export const selectEmail = ({ registerForm: { email } }: any): string => email;

export const selectRepeatEmail = ({
  registerForm: { repeatEmail },
}: any): string => repeatEmail;

export const selectPassword = ({ registerForm: { password } }: any): string =>
  password;

export const selectRepeatPassword = ({
  registerForm: { repeatPassword },
}: any): string => repeatPassword;

export const selectRememberMe = ({
  registerForm: { rememberMe },
}: any): boolean => rememberMe;

export const selectCheckboxAgree = ({
  registerForm: { agree },
}: any): boolean => agree;

export const selectName = ({ registerForm: { name } }: any): string => name;

export const selectBusinessName = ({
  registerForm: { businessName },
}: any): string => businessName;

export const selectSurname = ({ registerForm: { surname } }: any): string =>
  surname;

export const selectPhone = ({ registerForm: { phone } }: any): string => phone;

export const selectLogo = ({ registerForm: { logo } }: any): string => logo;

export const selectFormData = ({ registerForm }: any) => registerForm;

export const selectAds = ({ registerForm: { ads } }: any): [] => ads;

export const selectCredit = ({ registerForm: { credit } }: any): [] => credit;

export const selectCreatedDate = ({ registerForm: { created } }: any): [] => created;
