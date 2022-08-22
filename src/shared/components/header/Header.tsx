import { Box, Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { MenuProfile, SearchLayer } from '../';
import { useAppThemeContext, useDrawerContext } from '../../contexts';

export const Header: React.FC<{title: string}> = ({ title }: {title: string} ) => {
  const theme = useTheme();
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
  
  const { toggleDrawerOpen, isDrawerOpen } = useDrawerContext();
  const { toggleTheme, themeName } = useAppThemeContext();
  
  const mdDownIndependentOfDrawer = mdDown || (lgDown && isDrawerOpen);
  const smDownIndependentOfDrawer = smDown || (mdDown && isDrawerOpen);
  
  return (
    <Box paddingY={1} paddingX={smDownIndependentOfDrawer ? 1 : 2} display="flex" justifyContent={'space-between'} alignItems="center" bgcolor={theme.palette.secondary.light} height={theme.spacing(smDownIndependentOfDrawer ? 6 : mdDownIndependentOfDrawer ? 8 : 10)} borderLeft={1} borderColor={theme.palette.secondary.main} >
      <Box display="flex" gap={mdDownIndependentOfDrawer ? 0 : 1} alignItems="center">
        <Box padding={mdDownIndependentOfDrawer ? 0 : 2}>
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>{isDrawerOpen ? 'menu_open' : 'menu'}</Icon>
          </IconButton>
        </Box>
        
        <Typography overflow="visible" whiteSpace="nowrap" textOverflow="ellipsis" variant={mdDownIndependentOfDrawer ? 'h5' : 'h4'} padding={2}>
          {title}
        </Typography>
        
        <Box paddingX={smDownIndependentOfDrawer ? 0 : mdDownIndependentOfDrawer ? 2 : 4}>
          <SearchLayer onClick={ () => null }/>
        </Box>
      </Box>

      {
        !smDownIndependentOfDrawer && (
          <Box display="flex" alignItems={'center'} gap={2} padding={2}>
            {!mdDownIndependentOfDrawer && (
              <Box padding={2}>
                <IconButton onClick={toggleTheme} >
                  <Icon>{themeName === 'light' ? 'dark_mode' : 'light_mode'}</Icon>
                </IconButton>
              </Box>
            )}
            <MenuProfile />
          </Box>
        )
      }
    </Box>
  );
};