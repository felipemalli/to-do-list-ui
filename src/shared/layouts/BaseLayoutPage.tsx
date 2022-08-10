import { Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import { ReactNode } from 'react';
import { useDrawerContext } from '../contexts';
import { IChildrenProps } from '../interfaces';

interface IBaseLayoutPage extends IChildrenProps {
  title: string;
  toolbar: ReactNode;
  
}

export const BaseLayoutPage: React.FC<IBaseLayoutPage> = ({ children, title, toolbar }: IBaseLayoutPage) => {
  const theme = useTheme();
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box padding={1} display="flex" alignItems="center" gap={1} bgcolor={grey[200]} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 10)}>
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

      {toolbar && (
        <Box>
          {toolbar}
        </Box>
      )}
      
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};