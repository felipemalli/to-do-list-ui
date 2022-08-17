import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';

interface IListToolbar {
  searchText?: string;
  showSearchInput?: boolean;
  whenChangeSearchInput?: (newText: string) => void;
  newButtonText?: string;
  showNewButton?: boolean;
  whenClickNewButton?: () => void;
}

export const ListToolbar: React.FC<IListToolbar> = (
  { 
    searchText = '',
    whenChangeSearchInput,
    showSearchInput = false, 
    whenClickNewButton,
    newButtonText = 'New',
    showNewButton = true,
  }: IListToolbar
) => {
  const theme = useTheme();

  return (
    <Box height={theme.spacing(5)} marginX={1} padding={1} paddingX={2} display="flex" gap={1} alignItems="center" component={Paper}>
      {showSearchInput && (
        <TextField 
          size="small" 
          placeholder='Title...'
          value={searchText}
          onChange={(e) => whenChangeSearchInput?.(e.target.value)}
        />
      )}
      <Box flex={1} display="flex" justifyContent={'end'}>
        {showNewButton && (
          <Button
            color='primary'
            disableElevation
            variant='contained'
            onClick={whenClickNewButton}
            endIcon={<Icon>add</Icon>}
          >
            {newButtonText}
          </Button>
        )}
      </Box>
    </Box>
  );

};