import { Badge, Flex } from '@chakra-ui/react';
import { InfoCard } from './InfoCard';

export const Shopping = () => {
  let cardTitle = 'SHOPPING';
  let cardContent =
    'Effortlessly shop and communicate your needs without any language barriers hindering your experience.';

  return (
    <>
      <Flex direction='column' w='24%'>
        <Badge colorScheme='red' w='45%' borderRadius='4px' ml={3}>
          Closed
        </Badge>
        <InfoCard title={cardTitle} content={cardContent} />
      </Flex>
    </>
  );
};
