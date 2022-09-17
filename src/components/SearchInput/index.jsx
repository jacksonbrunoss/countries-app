import React from "react";
import * as S from "./styled";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ handleGetSearch, search, change }) => {
  return (
    <S.SearchInput>
      <button onClick={handleGetSearch}>
        <FaSearch />
      </button>
      <input
        onChange={change}
        value={search}
        type="text"
        placeholder="Search for a country"
      />
    </S.SearchInput>
  );
};

export default SearchInput;
