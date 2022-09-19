import React from "react";
import * as S from "./styled";

const SearchSelect = ({ change, region }) => {
  return (
    <S.SearchSelect>
      <select value={region} onChange={change}>
        <option value="">Filter by Region</option>
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
