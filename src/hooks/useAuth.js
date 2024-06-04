import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { checkUserAuth } from '../redux/slices/authSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const [isAuthorized, setIsAuthorized] = React.useState(false);
  const { isAuthenticated } = useSelector((state) => ({
    isAuthenticated: state.authReducer.isAuthenticated,
  }));

  React.useEffect(() => {
    if (isAuthenticated) {
      dispatch(checkUserAuth());
    } else {
      setIsAuthorized(false);
    }
  }, [dispatch, isAuthenticated]);

  return { isAuthenticated, isAuthorized };
};

export default useAuth;
