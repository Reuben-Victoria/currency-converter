import { useQueries } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchRates, fetchSymbols } from '../../Converter/api/fetchData';

export const useCurrency = () => {
  const [amount, setAmount] = useState(25);
  const [currencyOne, setCurrencyOne] = useState('GBP');
  const [currencyTwo, setCurrencyTwo] = useState('NGN');

  const [ratesData, symbolsData] = useQueries({
    queries: [
      {
        queryKey: ['rates', currencyOne],
        queryFn: () => fetchRates(currencyOne),
        staleTime: Infinity,
        select: ({ rates, date, timeStamp }) => {
          return { rates, date, timeStamp };
        },
        keepPreviousData:true
      },
      {
        queryKey: ['symbols'],
        queryFn: fetchSymbols,
        staleTime: Infinity,
        select: ({ symbols }) => symbols
      }
    ]
  });
  const isLoading = [ratesData, symbolsData].some((query) => query.isLoading);
  const isError = [ratesData, symbolsData].some((query) => query.isError);

  //   console.log(ratesData, 'RATES>>>');
  //   console.log(symbolsData?.data, 'Symbols');

  const convertedAmount = (ratesData?.data?.rates[currencyTwo] * amount).toFixed(2);

  const date = new Date(ratesData?.data?.date).toLocaleDateString();
  //   const time = new Date(ratesData?.data.timeStamp).toLocaleTimeString('en-US');

  const currencyList = symbolsData?.data ? Object.keys(symbolsData?.data) : [];

  console.log(currencyList, 'currencyList');

  return {
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
  };
};

// [
//   {
//     page: 1,
//     total_page: 10
//   },
//   {
//     data: [
//       {
//         title: 'dhfjdhf',
//         desc: '',
//         date: '',
//         comment: 1
//       },
//       {
//         title: 'dhfjdhf',
//         desc: '',
//         date: '',
//         comment: 2,
//         like: 3
//       }
//     ]
//   }
// ];
