import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { changeUser } from 'src/store/userSlice/';

const useCurrentUser = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const setUser = (username: string | null) => {
    dispatch(changeUser(username));
  };

  return { user, setUser };
};

export default useCurrentUser;
