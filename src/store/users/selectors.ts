import { useAppSelector } from "@store/hooks";

export const useUserInfo = () => {
    return useAppSelector(({ user }) => {
        return user;
    });
};
