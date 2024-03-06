import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

export const Progress = () => {
  return (
    <>
      <CircularProgress value={60} color='#FFF'>
        <CircularProgressLabel>6/10</CircularProgressLabel>
      </CircularProgress>
    </>
  );
};
