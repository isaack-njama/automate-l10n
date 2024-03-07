import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Circle,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const NavBar = () => {
  const { t } = useTranslation();

  return (
    <>
      <Flex
        minWidth='max-content'
        alignItems='center'
        gap='2'
        border='2px solid black'
        p='6px'
        m={6}
        borderRadius='18px'
      >
        <Image src='../assets/6633814.svg' alt='logo' />
        <Box>
          <Heading size='lg'>SpeechSavvy</Heading>
        </Box>
        <Spacer />
        <Center gap='6'>
          <Text>{t('nav.lesson')}</Text>
          <Text>{t('nav.results')}</Text>
          <Text>{t('nav.mistakes')}</Text>
        </Center>
        <Spacer />
        <ButtonGroup>
          <Button colorScheme='teal' borderRadius='24px'>
            Download App
          </Button>
          <Circle
            size='40px'
            border='1px solid black'
            bgGradient='linear(to-r, blue 33%, white 33%, white 66%, red 66%)'
            color='white'
          />
        </ButtonGroup>
      </Flex>
    </>
  );
};
