import { Badge, Flex } from '@chakra-ui/react';
import { InfoCard } from './InfoCard';

export const Music = () => {
  let cardTitle = 'MUSIC';
  let cardContent =
    'Discover the rich vocabulary of musical genres, instruments, and the joy of expressing yourself';

  return (
    <>
      <Flex direction='column' w='24%'>
        <Badge colorScheme='green' w='45%' borderRadius='4px' ml={3}>
          Completed
        </Badge>
        <InfoCard title={cardTitle} content={cardContent} />
      </Flex>
    </>
  );
};
