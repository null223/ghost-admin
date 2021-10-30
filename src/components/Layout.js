import { Box, AppBar, Toolbar, Typography } from '@mui/material';

import Provider from '@/components/Provider';
import useMe from '@/hooks/useMe';

import AccountCircle from '@mui/icons-material/AccountCircle';

export const Layout = ({ children }) => {
  const { data } = useMe();
  return (
    <Provider>
      <Box sx={{ height: 15, width: '100%', bgcolor: 'primary.dark' }} />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="h1">
            リソース管理
          </Typography>
          <Box
            sx={{
              display: 'flex',
              ml: 'auto',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AccountCircle />
            <Typography sx={{ ml: 1 }}>{data?.name}</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </Provider>
  );
};

export default Layout;
