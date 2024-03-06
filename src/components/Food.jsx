import { Badge, Flex } from '@chakra-ui/react';
import { InfoCard } from './InfoCard';

export const Food = () => {
  let cardTitle = 'FOOD';
  let cardContent =
    'Learn how to confidently choose your favorite dishes at cafe and communicate your preferences with ease.';

  return (
    <>
      <Flex direction='column' w='25%'>
        <Badge colorScheme='red' w='45%' borderRadius='4px' ml={3}>
          Closed
        </Badge>
        <InfoCard title={cardTitle} content={cardContent} />
      </Flex>
    </>
  );
};
