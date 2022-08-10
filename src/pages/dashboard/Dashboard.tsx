import { Button } from '@mui/material';
import { BaseLayoutPage } from '../../shared/layouts';

export const Dashboard = () => {
  
  return (
    <BaseLayoutPage title='Tasks' toolbar={<>a</>}>
      <Button variant="contained">Test</Button>
    </BaseLayoutPage>
  );
};