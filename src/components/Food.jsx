import { Badge, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { InfoCard } from './InfoCard';
import { Suspense } from 'react';

export const Food = () => {
  const { t } = useTranslation();

  console.log('cardTitle translation: ', t('food.cardTitle'));
  console.log('cardContent translation: ', t('food.cardContent'));

  return (
    <Suspense fallback='loading'>
      <Flex direction='column' w='25%'>
        <Badge colorScheme='red' w='45%' borderRadius='4px' ml={3}>
          Closed
        </Badge>
        <InfoCard title={t('food.cardTitle')} content={t('food.cardContent')} />
      </Flex>
    </Suspense>
  );
};
