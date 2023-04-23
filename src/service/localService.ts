export const USER_ADMIN = "USER_ADMIN";
export interface UserData {
  username: string;
  password: string;
}
export const userLocalService = {
  get: () => {
    let userJson = localStorage.getItem(USER_ADMIN);
    if (userJson) {
      return JSON.parse(userJson);
    } else {
      return null;
    }
  },

  set: (userData: UserData) => {
    let userJson = JSON.stringify(userData);
    localStorage.setItem(USER_ADMIN, userJson);
  },

  remove: () => {
    localStorage.removeItem(USER_ADMIN);
  },
};
