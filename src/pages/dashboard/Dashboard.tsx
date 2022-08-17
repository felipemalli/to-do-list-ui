import { Button } from '@mui/material';
import { ListToolbar } from '../../shared/components';
import { BaseLayoutPage } from '../../shared/layouts';

export const Dashboard = () => {
  
  return (
    <BaseLayoutPage
      title='Tasks' 
      toolbar={(
        <ListToolbar 
          showSearchInput
          showNewButton
        />)}
    >
      <Button variant="contained">Test</Button>
    </BaseLayoutPage>
  );
};