import { useState } from 'react';

import {
  Box,
  AppBar,
  Drawer,
  Toolbar,
  Grid,
  Paper,
  Container,
  Icon,
  IconButton,
} from '@mui/material';

type Props = {
  header: object;
  sidebar: object;
  main: object;
};

const BasicDashboardLayout: React.FC<Props> = ({
  header,
  sidebar,
  main,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="absolute">
        <Toolbar
          sx={{
            pr: '24px', // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              marginRight: '36px',
              // ...(open && { display: 'none' }),
            }}
            onClick={() => setOpen(!open)}
          >
            <Icon>menu</Icon>
          </IconButton>
          {header}
        </Toolbar>
      </AppBar>
      <Drawer
        /* variant="permanent" */ open={open}
        onClose={() => setOpen(false)}
      >
        {sidebar}
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.grey[100],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {main}
        </Container>
      </Box>
    </Box>
  );
};

export default BasicDashboardLayout;
