import {useAppDispatch, useAppSelector} from 'src/store/hooks';
import {changeUser} from 'src/store/userSlice/userSlice';
import {UserInitialType} from 'src/types/userTypes';

const useCurrentUser = () => {
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const setUser = (username: string | null) => {
    dispatch(changeUser(username));
  };

  const userCurrentArray: [UserInitialType, (username: string | null) => void] =
    [user, setUser];

  return userCurrentArray;
};

export default useCurrentUser;
