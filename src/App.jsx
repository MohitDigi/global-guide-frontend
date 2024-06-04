import React from 'react';

import { ConfigProvider } from 'antd';

import AppRouter from './router';
import theme from './theme.json';

function App() {
  // const isPanel = useMatch('/panel/*');
  // const navigate = useNavigate();
  // const [searchParams] = useSearchParams();

  // const isAuthenticated = useSelector(
  //   (state) => state.authReducer.isAuthenticated
  // );

  // useEffect(() => {
  //   console.log("called effect")
  //   if (!isPanel && isAuthenticated === true) {
  //     navigate(searchParams.get('next') ?? '/panel/dashboard');
  //   }
  // }, [isPanel, isAuthenticated]);
  return (
    <ConfigProvider theme={theme}>
      <AppRouter />
    </ConfigProvider>
  );
}

export default App;
