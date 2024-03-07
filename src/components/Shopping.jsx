import { Badge, Flex } from '@chakra-ui/react';
import { InfoCard } from './InfoCard';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

export const Shopping = () => {
  const { t } = useTranslation();

  return (
    <Suspense>
      <Flex direction='column' w='24%'>
        <Badge colorScheme='red' w='45%' borderRadius='4px' ml={3}>
          Closed
        </Badge>
        <InfoCard title={t('shopping.cardTitle')} content={t('shopping.cardContent')} />
      </Flex>
    </Suspense>
  );
};
