import { Card, CardHeader, Center, Flex, Spacer, Text } from '@chakra-ui/react';

export const InfoCard = ({ icon, title, content }) => {
  return (
    <Card bg='#e6e6e6' borderRadius={18}>
      <Flex direction='row' justifyContent='center'>
        <Center>
          <CardHeader>{icon}</CardHeader>
        </Center>
        <Center>
          <Text fontSize='xl' fontWeight='bold'>{title}</Text>
        </Center>
      </Flex>
      <Spacer />
      <Flex justifyContent='center'>
        <Text fontSize='lg'>{content}</Text>
      </Flex>
    </Card>
  );
};
