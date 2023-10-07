import { Link } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText, Hidden } from '@mui/material';

export type Props = {
  icon: string;
  label: string;
  route: string;
};

export const SidebarNav: React.FC<Props> = ({ icon, label, route }) => {
  return (
    <ListItem component={Link} to={route} button>
      <ListItemIcon>{icon}</ListItemIcon>
      <Hidden mdDown>
        <ListItemText primary={label} />
      </Hidden>
    </ListItem>
  );
};

export default SidebarNav;
