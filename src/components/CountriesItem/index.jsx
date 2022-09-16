import React from "react";
import * as S from "./styled";

const CountriesItem = ({ image, population, region, capital, name }) => {
  return (
    <S.CountriesItem>
      <div>
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>
        <strong>População: </strong> {population}
      </p>
      <p>
        <strong>Região: </strong>
        {region}
      </p>
      <p>
        <strong>Capital: </strong>
        {capital}
      </p>
    </S.CountriesItem>
  );
};

export default CountriesItem;
