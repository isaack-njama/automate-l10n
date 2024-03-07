import { Badge, Flex } from '@chakra-ui/react';
import { InfoCard } from './InfoCard';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

export const Music = () => {
  const { t } = useTranslation();

  return (
    <Suspense>
      <Flex direction='column' w='24%'>
        <Badge colorScheme='green' w='45%' borderRadius='4px' ml={3}>
          Completed
        </Badge>
        <InfoCard title={t('music.cardTitle')} content={t('music.cardContent')} />
      </Flex>
    </Suspense>
  );
};
