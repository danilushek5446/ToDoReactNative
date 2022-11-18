export type UserType = {
  id: string| null;
  login: string| null;
  password: string| null;
  name?: string | null;
  photo?: string| null;
};

export type UserArrayStorageType = {
  users: UserType[];
};
