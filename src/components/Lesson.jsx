import { Box } from '@chakra-ui/react';
import { InfoCard } from './InfoCard';
import { Progress } from './Progress';

export const Lesson = () => {
  return (
    <Box m={4} justifyContent='center'>
      <InfoCard
        icon={<Progress />}
        title='Read the sentence'
        content="J\'aime vraiment voyager avec mes amis"
      />
    </Box>
  );
};
