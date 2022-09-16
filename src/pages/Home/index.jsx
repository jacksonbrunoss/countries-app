import React from "react";
import * as S from "./styled";

import { GET_COUNTRIES } from "../../services/api";
import CountriesItem from "../../components/CountriesItem";

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
    <S.ContentCountryList>
      <S.Container>
        <S.WrapperContentCoutry>
          {countries.length > 0 &&
            countries.map((item, i) => (
              <CountriesItem
                key={i}
                image={item.flags.png}
                name={item.name.official}
                population={item.population}
                capital={item.capital}
                region={item.region}
              />
            ))}
        </S.WrapperContentCoutry>
      </S.Container>
    </S.ContentCountryList>
  );
};

export default Home;
