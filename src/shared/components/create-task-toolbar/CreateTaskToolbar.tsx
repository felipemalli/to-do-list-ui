import { Box, Button, Divider, Icon, Paper, Skeleton, TextField, Typography, useTheme } from '@mui/material';

interface ICreateTaskToolbar {
  newButtonText?: string;

  showNewButton?: boolean;
  showSaveButton?: boolean;
  showDeleteButton?: boolean;

  showLoadingNewButton?: boolean;
  showLoadingSaveButton?: boolean;
  showLoadingDeleteButton?: boolean;

  whenClickNewButton?: () => void;
  whenClickSaveButton?: () => void;
  whenClickDeleteButton?: () => void;
}

export const CreateTaskToolbar: React.FC<ICreateTaskToolbar> = (
  {
    newButtonText = 'New',

    showNewButton = true,
    showSaveButton = true,
    showDeleteButton = false,

    showLoadingNewButton = false,
    showLoadingSaveButton = false,
    showLoadingDeleteButton = false,

    whenClickNewButton,
    whenClickSaveButton,
    whenClickDeleteButton,
  }: ICreateTaskToolbar
) => {
  // const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  // const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();


  
  return (
    <Box height={theme.spacing(5)} marginX={1} padding={1} paddingX={2} display="flex" gap={1} alignItems="center" component={Paper}>
      
      <Box display="flex" gap={1} alignItems={'center'}>
        <TextField size="small" placeholder='New task here...'/>
        <Box flex={1} display="flex" justifyContent={'end'} >
          {(showNewButton && !showLoadingNewButton) && (
            <Button
              color='primary'
              disableElevation
              variant='outlined'
              onClick={whenClickNewButton}
              startIcon={<Icon>add</Icon>}
            >
              <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                {newButtonText}
              </Typography>
            </Button>
          )}

          {showLoadingNewButton && (
            <Skeleton width={80} height={60}/>
          )}
        </Box>
      </Box>

      {(
        <Divider variant='middle' orientation='vertical'/>
      )}


      {(showSaveButton && !showLoadingSaveButton) && (
        <Button
          color='primary'
          disableElevation
          variant='contained'
          onClick={whenClickSaveButton}
          startIcon={<Icon>save</Icon>}
        >
          <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
            Save
          </Typography>
        </Button>
      )}

      {showLoadingSaveButton && (
        <Skeleton width={92} height={60}/>
      )}

      {(showDeleteButton && !showLoadingDeleteButton) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={whenClickDeleteButton}
          startIcon={<Icon>delete</Icon>}
        >
          <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
            Delete
          </Typography>
        </Button>
      )}

      {showLoadingDeleteButton && (
        <Skeleton width={100} height={60}/>
      )}
 
      {/* {(
        <Divider variant='middle' orientation='vertical'/>
      )} */}


    </Box>
  );
};
