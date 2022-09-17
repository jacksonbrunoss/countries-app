import React from "react";
import * as S from "./styled";

import { GET_COUNTRIES } from "../../services/api";
import CountriesItem from "../../components/CountriesItem";
import SearchInput from "../../components/SearchInput";
import SearchSelect from "../../components/SearchSelect";

const Home = () => {
  const [countries, setCoutries] = React.useState([]);

  const handleGetCountries = async () => {
    const { url, options } = GET_COUNTRIES();
    const response = await fetch(url, options);
    const data = await response.json();
    setCoutries(data);
  };

  React.useEffect(() => {
    handleGetCountries();
    console.log(countries);
  }, []);
  return (
    <>
      <S.HeadingBar>
        <S.Container>
          <S.WrapperHeadingBar>
            <SearchInput />
            <SearchSelect />
          </S.WrapperHeadingBar>
        </S.Container>
      </S.HeadingBar>
      <S.ContentCountryList>
        <S.Container>
          <S.WrapperContentCoutry>
            {countries.length > 0 &&
              countries.map((country) => (
                <CountriesItem key={country.id} country={country} />
              ))}
          </S.WrapperContentCoutry>
        </S.Container>
      </S.ContentCountryList>
    </>
  );
};

export default Home;
