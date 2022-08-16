import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { Header } from '../components/header/Header';
import { IChildrenProps } from '../interfaces';

interface IBaseLayoutPage extends IChildrenProps {
  title: string;
  toolbar: ReactNode;
}

export const BaseLayoutPage: React.FC<IBaseLayoutPage> = ({ children, title, toolbar }: IBaseLayoutPage) => {
  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Header title={title} />
      
      {toolbar && <Box>{toolbar}</Box>}
      
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};