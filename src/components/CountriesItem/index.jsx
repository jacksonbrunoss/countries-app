import React from "react";
import * as S from "./styled";

const CountriesItem = ({ country }) => {
  return (
    <S.CountriesItem>
      <div>
        <img src={country.flags.svg} alt={country.name.official} />
      </div>
      <h3>{country.name.official}</h3>
      <p>
        <strong>População: </strong> {country.population}
      </p>
      <p>
        <strong>Região: </strong>
        {country.region}
      </p>
      <p>
        <strong>Capital: </strong>
        {country.capital}
      </p>
    </S.CountriesItem>
  );
};

export default CountriesItem;
