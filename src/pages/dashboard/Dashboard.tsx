import { Button } from '@mui/material';
import { DetailToolbar } from '../../shared/components';
import { BaseLayoutPage } from '../../shared/layouts';

export const Dashboard: React.FC = () => {
  
  return (
    <BaseLayoutPage
      title='Tasks' 
      toolbar={(
        <DetailToolbar />)}
    >
      <Button variant="contained">Test</Button>
    </BaseLayoutPage>
  );
};
