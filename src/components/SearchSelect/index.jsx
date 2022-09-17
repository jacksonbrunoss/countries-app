import React from "react";
import * as S from "./styled";

const SearchSelect = () => {
  return (
    <S.SearchSelect>
      <select name="select">
        <option selected>Filter by Region</option>
        <option value="africa">Afríca</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europa</option>
        <option value="oceania">Oceania</option>
      </select>
    </S.SearchSelect>
  );
};

export default SearchSelect;
