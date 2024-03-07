import { Box } from '@chakra-ui/react';
import { InfoCard } from './InfoCard';
import { Progress } from './Progress';
import { useTranslation } from 'react-i18next';

export const Lesson = () => {
  const { t } = useTranslation();


  return (
    <Box m={4} justifyContent='center'>
      <InfoCard
        icon={<Progress />}
        title={t('lesson.title')}
        content={t('lesson.content')}
      />
    </Box>
  );
};
