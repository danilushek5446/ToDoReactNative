export type UserInitialType = {
  username: string | null;
};

export type UserStorageType = {
  login: string;
  password: string;
};

export type UserArrayStorageType = {
  users: UserStorageType[];
};
