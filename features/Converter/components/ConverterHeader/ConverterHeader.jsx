import { Box, Text } from "@chakra-ui/react";

const ConverterHeader = () => {
  return (
  <Box textAlign="center" color="white" marginTop="20" marginBottom="10">
    <Text fontWeight="bold" fontSize="3xl">
        Currency Converter and Exchange Rates
    </Text>
    <Text fontWeight="light" fontSize="2xl">
        Up to Date FX Rates
    </Text>
  </Box>
  );
};

export default ConverterHeader;
