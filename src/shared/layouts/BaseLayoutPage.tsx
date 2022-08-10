import { Divider, Icon, IconButton, Typography, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import { useDrawerContext } from '../contexts';
import { IChildrenProps } from '../interfaces';

interface IBaseLayoutPage extends IChildrenProps {
  title: string;
}

export const BaseLayoutPage: React.FC<IBaseLayoutPage> = ({ children, title }: IBaseLayoutPage) => {
  const theme = useTheme();
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column">
      <Box padding={1} display="flex" alignItems="center" height={theme.spacing(12)} gap={1} bgcolor={grey[200]}>
        <IconButton onClick={toggleDrawerOpen}>
          <Icon>menu</Icon>
        </IconButton>
        <Typography variant="h5">
          {title}
        </Typography>
      </Box>


      <Divider  />
      
      <Box>
        Barra
      </Box>
      
      <Box>
        {children}
      </Box>
    </Box>
  );
};