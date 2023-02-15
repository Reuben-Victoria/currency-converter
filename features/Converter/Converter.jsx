import { Box, Grid, GridItem, Spinner, Text } from '@chakra-ui/react';
import ConverterHeader from './components/ConverterHeader/ConverterHeader';
import { useCurrency } from '../common/hooks/useCurrency';
import ConverterOption from './components/ConverterOption';
import ConverterInput from './components/ConverterInput';
import ConverterDispaly from './components/ConverterDispaly';
import { RepeatIcon } from '@chakra-ui/icons';

const Converter = () => {
  const {
    amount,
    currencyOne,
    currencyTwo,
    ratesData,
    symbolsData,
    date,
    setAmount,
    setCurrencyOne,
    setCurrencyTwo,
    convertedAmount,
    isLoading,
    isError,
    currencyList
  } = useCurrency();
  if (isError)
    return (
      <Text fontWeight="bold" fontSize="3xl" color="white" my="10">
        Something has gone very wrong
      </Text>
    );

  if (isLoading) {
    return (
      <Spinner
        margin="auto auto"
        size="xl"
        thickness="4px"
        speed="0.65s"
        color="purple.500"
        emptyColor="purple.200"
      />
    );
  }
  return (
    <Box width={{ base: '90vw', sm: '45vw' }} margin="0 auto">
      <ConverterHeader />
      <Grid
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(2, 1fr)"
        padding={{ base: '6', sm: '10' }}
        gap="1rem"
        backgroundColor="white"
        borderRadius="lg">
        <GridItem colSpan={{ base: 5, sm: 2 }} justifySelf="center" alignSelf="center">
          <ConverterOption
            symbol={symbolsData.data}
            currencyList={currencyList}
            onCurrencyChange={setCurrencyOne}
            currency={currencyOne}
          />
        </GridItem>
        <GridItem
          display={{ base: 'none', sm: 'block' }}
          colSpan={1}
          justifySelf="center"
          alignSelf="center">
          <RepeatIcon boxSize="2rem" color="purple.300" />
        </GridItem>
        <GridItem colSpan={{ base: 5, sm: 2 }} justifySelf="center" alignSelf="center">
          <ConverterOption
            symbol={symbolsData.data}
            currencyList={currencyList}
            onCurrencyChange={setCurrencyTwo}
            currency={currencyTwo}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <ConverterInput value={amount} onAmountChange={setAmount} />
        </GridItem>
        <GridItem colSpan={3} justifySelf="right" alignSelf="right">
          <ConverterDispaly
            amount={amount}
            ratesData={ratesData?.data}
            currencyOne={currencyOne}
            currencyTwo={currencyTwo}
            convertedAmount={convertedAmount}
            date={date}
          />
        </GridItem>
      </Grid>
      <Text textAlign="center" marginTop="1.5rem" color="whiteAlpha.600" fontSize="sm">
        Built with React Query, Axios, Chakra UI
      </Text>
    </Box>
  );
};
export default Converter;
