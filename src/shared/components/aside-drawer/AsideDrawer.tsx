import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useAppThemeContext, useDrawerContext } from '../../contexts';
import { IChildrenProps } from '../../interfaces';

interface IListItemLinkProps {
  to: string;
  icon: string;
  label: string;
  onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }: IListItemLinkProps) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const AsideDrawer: React.FC<IChildrenProps> = ({ children }: IChildrenProps ) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const { toggleTheme, themeName } = useAppThemeContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'persistent'} onClose={toggleDrawerOpen} sx={{'& .MuiDrawer-paper': { borderWidth: 0 }}}>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection={'column'} bgcolor={theme.palette.secondary.light}>

          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar 
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="/static/images/avatar/1.jpg" />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map(({ icon, path, label }) => (
                <ListItemLink
                  key={path}
                  icon={icon}
                  to={path}
                  label={label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
          
            
          <Box>
            <List component="nav">

              {(mdDown || (lgDown && isDrawerOpen)) && 
                (
                  <ListItemButton onClick={toggleTheme}>
                    <ListItemIcon>
                      <Icon >{themeName === 'light' ? 'dark_mode' : 'light_mode'}</Icon>
                    </ListItemIcon>
                    <ListItemText>{themeName === 'light' ? 'Dark Mode' : 'Light Mode'}</ListItemText>
                  </ListItemButton>
                )
              }
              {((smDown) || (mdDown && isDrawerOpen)) && 
                (
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon >logout</Icon>
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                  </ListItemButton>
                )
              }
            </List>
          </Box>
        
        </Box>
        
      </Drawer>
              
      <Box height="100vh" marginLeft={smDown ? 0 : (isDrawerOpen ? theme.spacing(28) : 0)}>
        {children}
      </Box>
    </>
  );
};