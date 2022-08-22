import { Box, Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { SearchLayer } from '../';
import { useAppThemeContext, useDrawerContext } from '../../contexts';

export const Header: React.FC<{title: string}> = ({ title }: {title: string} ) => {
  const theme = useTheme();
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
  
  const { toggleDrawerOpen, isDrawerOpen } = useDrawerContext();
  const { toggleTheme, themeName } = useAppThemeContext();

  return (
    <Box borderLeft={1} borderColor={theme.palette.secondary.main} padding={1} display="flex" justifyContent={'space-between'} alignItems="center" bgcolor={theme.palette.secondary.light} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 10)}>
      <Box display="flex" gap={mdDown ? 2 : 5} alignItems="center">
        <IconButton onClick={toggleDrawerOpen}>
          <Icon>{isDrawerOpen ? 'menu_open' : 'menu'}</Icon>
        </IconButton>
        
        <Typography 
          overflow="visible"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          variant={mdDown ? 'h5' : 'h4'}
        >
          {title}
        </Typography>

        <SearchLayer onClick={ () => null }/>
      </Box>
      {
        !(mdDown || (lgDown && isDrawerOpen)) && 
            <Box padding={2}>
              <IconButton onClick={toggleTheme} >
                <Icon>{themeName === 'light' ? 'dark_mode' : 'light_mode'}</Icon>
              </IconButton>
            </Box>
      }    
    </Box>
  );
};