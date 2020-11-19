import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";

const GET_CURRENCIES = gql`
  query getCurrencies {
    currency
  }
`;

const CurrencySelector = ({ handleChangeCurrency, currency }) => {
  const { data } = useQuery(GET_CURRENCIES);
  return (
    <select
      onChange={handleChangeCurrency}
      value={currency}
      className="dropdown"
    >
      {data &&
        data.currency.length > 0 &&
        data.currency.map((currency, index) => (
          <option key={`${currency}-currency-${index}`}>{currency}</option>
        ))}
    </select>
  );
};

export default CurrencySelector;
