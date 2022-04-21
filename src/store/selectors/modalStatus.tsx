export const selectVisibility = ({ modalStatus: { show } }: any): boolean  => show;

export const selectStatus = ({ modalStatus: { status } }: any): string => status;

export const selectMsg = ({ modalStatus: { message } }: any): string => message;