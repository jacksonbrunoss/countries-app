import React from "react";
import { GET_SEARCH } from "../../services/api";
import { useLocation } from "react-router-dom";

import * as S from "./styled";

import CountriesItem from "../../components/CountriesItem";

const Search = () => {
  const [country, setCountry] = React.useState([]);

  const { state } = useLocation();
  const val = state.search;

  const getSearchCounties = async (value) => {
    const { url, options } = GET_SEARCH(value);
    const response = await fetch(url, options);
    const data = await response.json();
    setCountry(data);
  };

  React.useEffect(() => {
    getSearchCounties(val);
  }, []);

  console.log(country);
  return (
    <S.SearchBox>
      <S.Container>
        <S.WrapperSearchBox>
          {country.length > 0 &&
            country.map((count, i) => (
              <CountriesItem key={i} country={count} />
            ))}
        </S.WrapperSearchBox>
      </S.Container>
    </S.SearchBox>
  );
};

export default Search;
