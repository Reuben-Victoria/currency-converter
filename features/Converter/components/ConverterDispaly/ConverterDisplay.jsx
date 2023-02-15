import { Text, Box } from '@chakra-ui/react';

const ConverterDisplay = ({
  currencyOne,
  currencyTwo,
  date,
  convertedAmount,
  amount
}) => {
  return (
    <Box textAlign="right">
      <Text fontSize="lg" fontWeight="bold">
        {amount} {currencyOne}
      </Text>
      <Text fontSize="2xl" fontWeight="bold" color="purple.500">
        {convertedAmount} {currencyTwo}
      </Text>
      <Text fontSize="xs" color="gray.400">
        Market rates collected - {date}
      </Text>
    </Box>
  );
};

export default ConverterDisplay;
