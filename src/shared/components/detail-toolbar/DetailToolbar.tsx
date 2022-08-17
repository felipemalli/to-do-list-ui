import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from '@mui/material';

interface IDetailToolbarProps {
  newButtonText?: string;

  showNewButton?: boolean;
  showSaveButton?: boolean;
  showDeleteButton?: boolean;
  showBackButton?: boolean;

  showLoadingNewButton?: boolean;
  showLoadingSaveButton?: boolean;
  showLoadingDeleteButton?: boolean;
  showLoadingBackButton?: boolean;

  whenClickNewButton?: () => void;
  whenClickSaveButton?: () => void;
  whenClickDeleteButton?: () => void;
  whenClickBackButton?: () => void;
}

export const DetailToolbar: React.FC<IDetailToolbarProps> = (
  {
    newButtonText = 'New',

    showNewButton = true,
    showSaveButton = true,
    showDeleteButton = true,
    showBackButton = true,

    showLoadingNewButton = false,
    showLoadingSaveButton = false,
    showLoadingDeleteButton = false,
    showLoadingBackButton = false,

    whenClickNewButton,
    whenClickSaveButton,
    whenClickDeleteButton,
    whenClickBackButton,
  }: IDetailToolbarProps
) => {
  const theme = useTheme();

  return (
    <Box height={theme.spacing(5)} marginX={1} padding={1} paddingX={2} display="flex" gap={1} alignItems="center" component={Paper}>
      {(showNewButton && !showLoadingNewButton) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={whenClickNewButton}
          startIcon={<Icon>add</Icon>}
        >{newButtonText}</Button>
      )}

      {showLoadingNewButton && (
        <Skeleton width={80} height={60}/>
      )}

      {(showSaveButton && !showLoadingSaveButton) && (
        <Button
          color='primary'
          disableElevation
          variant='contained'
          onClick={whenClickSaveButton}
          startIcon={<Icon>save</Icon>}
        >Save</Button>
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
        >Delete</Button>
      )}

      {showLoadingDeleteButton && (
        <Skeleton width={100} height={60}/>
      )}

      <Divider variant='middle' orientation='vertical'/>

      {(showBackButton && !showLoadingBackButton) && (
        <Button
          color='primary'
          disableElevation
          variant='outlined'
          onClick={whenClickBackButton}
          startIcon={<Icon>arrow_back</Icon>}
        >Back</Button>
      )}

      {showLoadingBackButton && (
        <Skeleton width={92} height={60}/>
      )}
    </Box>
  );
};
