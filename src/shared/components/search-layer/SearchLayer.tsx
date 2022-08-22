import { Box, Button, Icon, IconButton, TextField, Theme, useMediaQuery } from '@mui/material';
import { useDrawerContext } from '../../contexts';

interface ISearchLayer {
  onClick: () => void;
}

export const SearchLayer: React.FC<ISearchLayer> = ({ onClick }: ISearchLayer) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  
  const { isDrawerOpen } = useDrawerContext();

  const smDownIndependentOfDrawer = smDown || (mdDown && isDrawerOpen);

  return (
    <>
      {
        !smDownIndependentOfDrawer ? (
          <Box display="flex" gap={1}>
            <TextField size="small" placeholder='Searching...'/>
            <Box flex={1} display="flex" justifyContent={'end'}>
              <Button color='primary' disableElevation variant='contained' onClick={ onClick }>
                  Search
              </Button>
            </Box>
          </Box>
        ) : (
          <Box display="flex" gap={1} alignItems={'center'}>
            <TextField size="small" placeholder='Searching...'/>
            <Box flex={1} display="flex" justifyContent={'end'} >
              <IconButton onClick={ onClick }>
                <Icon>search</Icon>
              </IconButton>
            </Box>
          </Box>
        )
      }
    </>
  );
};