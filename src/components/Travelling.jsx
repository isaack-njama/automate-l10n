import { Badge, Flex } from '@chakra-ui/react';
import { InfoCard } from './InfoCard';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

export const Travelling = () => {
  const { t } = useTranslation();

  return (
    <Suspense>
      <Flex direction='column' w='25%'>
        <Badge colorScheme='yellow' w='45%' borderRadius='4px' ml={3}>
          In progress
        </Badge>
        <InfoCard title={t('travelling.cardTitle')} content={t('travelling.cardContent')} />
      </Flex>
    </Suspense>
  );
};
