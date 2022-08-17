import { Button } from '@mui/material';
import { Toolbar } from '../../shared/components';
import { BaseLayoutPage } from '../../shared/layouts';

export const Dashboard = () => {
  
  return (
    <BaseLayoutPage
      title='Tasks' 
      toolbar={(<Toolbar />)}
    >
      <Button variant="contained">Test</Button>
    </BaseLayoutPage>
  );
};