import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { changePhoto, deleteUserFromState, setUserToState } from 'src/store/userSlice';
import type { UserType } from 'src/types/userTypes';

const useCurrentUser = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const setUser = (user: UserType) => {
    dispatch(setUserToState(user));
  };

  const setUserPhoto = (photo: string) => {
    dispatch(changePhoto(photo));
  };

  const deleteUser = () => {
    dispatch(deleteUserFromState());
  };

  return { user, setUser, setUserPhoto, deleteUser };
};

export default useCurrentUser;
