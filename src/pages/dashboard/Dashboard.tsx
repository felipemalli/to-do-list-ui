import { Button } from '@mui/material';
import { CreateTaskToolbar } from '../../shared/components';
import { BaseLayoutPage } from '../../shared/layouts';

export const Dashboard: React.FC = () => {
  
  return (
    <BaseLayoutPage
      title='Tasks' 
      toolbar={(
        <CreateTaskToolbar />)}
    >
      <Button variant="contained">Test</Button>
    </BaseLayoutPage>
  );
};
