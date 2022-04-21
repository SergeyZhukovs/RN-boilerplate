import Api from "./Instance";

export const fetchProfile = (token: string | null) =>
  Api.get(`/profile?token=${token}`, {});

