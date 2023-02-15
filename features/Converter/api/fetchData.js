import { axios } from '../../../lib/axios';

export const fetchRates = async (currencyOne) => {
  const { data } = await axios.get(`latest?base=${currencyOne}`);
  return data;
};

export const fetchSymbols = async () => {
  const { data } = await axios.get("symbols");
  return data;
};
