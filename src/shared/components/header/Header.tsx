import { Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useAppThemeContext, useDrawerContext } from '../../contexts';

export const Header: React.FC<{title: string}> = ({ title }: {title: string} ) => {
  const theme = useTheme();
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  
  const { toggleDrawerOpen } = useDrawerContext();
  const { toggleTheme, themeName } = useAppThemeContext();

  return (
    <Box padding={1} display="flex" justifyContent={'space-between'} alignItems="center" bgcolor={theme.palette.secondary.light} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 10)}>
      <Box display="flex" gap={2}>
        <IconButton onClick={toggleDrawerOpen}>
          <Icon>menu</Icon>
        </IconButton>
        <Typography 
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          variant={smDown ? 'h5' : 'h4'}
        >
          {title}
        </Typography>
      </Box>

      <Box padding={2}>
        <IconButton onClick={toggleTheme} >
          <Icon>{themeName === 'light' ? 'light_mode' : 'dark_mode'}</Icon>
        </IconButton>
      </Box>
    </Box>
  );
};