import { Avatar, Flex, Select } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useFlags } from '../../../common/hooks/useFlags';
const ConverterOption = ({symbol, currency, currencyList, onCurrencyChange}) => {
  const {flagUrl} = useFlags(currency);
  return (
    <Flex gap="1rem" shadow="md" padding="1rem" borderRadius="lg">
      <Avatar src={flagUrl} size="xs"/>
      <Select
        variant="unstyled"
        size="md"
        defaultValue={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}>
        {currencyList?.map((currency) => {
          return (
            <option key={currency} value={currency}>
              {currency}-{symbol[currency]}
            </option>
          );
        })}
      </Select>
    </Flex>
  );
};

ConverterOption.propTypes = {
  symbol: PropTypes.object,
  currencyList: PropTypes.array,
  currency: PropTypes.string,
  onCurrencyChange: PropTypes.func
};

export default ConverterOption;
