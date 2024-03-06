import { Badge, Flex } from '@chakra-ui/react';
import { InfoCard } from './InfoCard';

export const Travelling = () => {
  let cardTitle = 'TRAVELLING';
  let cardContent =
    'Confidently navigate your travels, exploring new cultures and exciting destinations without any language obstacles.';

  return (
    <>
      <Flex direction='column' w='25%'>
        <Badge colorScheme='yellow' w='45%' borderRadius='4px' ml={3}>
          In progress
        </Badge>
        <InfoCard title={cardTitle} content={cardContent} />
      </Flex>
    </>
  );
};
